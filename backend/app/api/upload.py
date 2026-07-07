from datetime import date

from fastapi import APIRouter
from fastapi import Depends
from fastapi import File
from fastapi import UploadFile

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.aa_record import AARecord
from app.models.document import Document
from app.models.epfo_record import EPFORecord
from app.models.financial_record import FinancialRecord
from app.models.gst_record import GSTRecord
from app.models.notification import Notification
from app.models.upi_record import UPIRecord

from app.services.financial_engine import FinancialHealthEngine
from app.services.ingestion_service import IngestionService

router = APIRouter()


@router.post("/")
async def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    business_id = 1

    ingestion = IngestionService()

    result = ingestion.simulate_extraction(file.filename)

    document = Document(
        business_id=business_id,
        document_type=result["document_type"],
        file_name=file.filename,
        file_path=f"/uploads/{file.filename}",
        status="Processed",
    )

    db.add(document)

    fields = result["fields"]

    if result["document_type"] == "GST":

        db.add(
            GSTRecord(
                business_id=business_id,
                filing_month=date.today(),
                gst_turnover=fields["gst_turnover"],
                gst_tax_paid=fields["gst_paid"],
                filing_status="Filed",
                delay_days=fields["filing_delay_days"],
                compliance_score=fields["compliance_score"],
            )
        )

    elif result["document_type"] == "UPI":

        db.add(
            UPIRecord(
                business_id=business_id,
                transaction_month=date.today(),
                total_transactions=fields["transactions"],
                total_volume=fields["volume"],
                success_rate=fields["success_rate"],
                digital_ratio=fields["digital_ratio"],
            )
        )

    elif result["document_type"] == "EPFO":

        db.add(
            EPFORecord(
                business_id=business_id,
                record_month=date.today(),
                employee_count=fields["employees"],
                salary_paid=fields["salary_paid"],
                compliance=fields["compliance"],
            )
        )

    elif result["document_type"] == "BANK_STATEMENT":

        db.add(
            AARecord(
                business_id=business_id,
                record_month=date.today(),
                average_balance=fields["average_balance"],
                monthly_credit=fields["monthly_credit"],
                monthly_debit=fields["monthly_debit"],
                credit_debit_ratio=round(
                    fields["monthly_credit"] /
                    max(fields["monthly_debit"], 1),
                    2,
                ),
            )
        )

    elif result["document_type"] == "PROFIT_LOSS":

        db.add(
            FinancialRecord(
                business_id=business_id,
                record_date=date.today(),
                revenue=fields["revenue"],
                expenses=fields["expenses"],
                profit=fields["profit"],
                cash_flow=fields["profit"] * 0.65,
                bank_balance=450000,
                gst_paid=fields["revenue"] * 0.18,
                gst_filing_score=98,
                gst_delay_days=0,
                upi_transactions=1800,
                upi_volume=720000,
                digital_payment_ratio=0.91,
                employee_count=26,
                salary_paid=620000,
                epfo_compliance=True,
                average_bank_balance=560000,
                monthly_credit=810000,
                monthly_debit=590000,
            )
        )

    db.commit()

    FinancialHealthEngine(db).calculate(business_id)

    db.add(
        Notification(
            business_id=business_id,
            title="Document Processed",
            message=f"{result['document_type']} uploaded successfully.",
            notification_type="success",
        )
    )

    db.commit()

    return {

        "success": True,

        "document": result["document_type"],

        "confidence": result["confidence"],

        "message": "Document processed successfully.",

        "financial_health_updated": True,

    }