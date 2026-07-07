from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.report import Report

from app.services.report_service import ReportService

router = APIRouter()


@router.post("/generate")
def generate_report(
    db: Session = Depends(get_db),
):

    business_id = 1

    report = ReportService(db).generate(
        business_id
    )

    return {

        "success": True,

        "report": report,

    }


@router.get("/executive")
def executive_report(
    db: Session = Depends(get_db),
):

    business_id = 1

    report = ReportService(db).generate(
        business_id
    )

    return {

        "success": True,

        "report": report,

    }


@router.get("/history")
def report_history(
    db: Session = Depends(get_db),
):

    business_id = 1

    reports = (

        db.query(Report)

        .filter(
            Report.business_id == business_id
        )

        .order_by(
            Report.created_at.desc()
        )

        .all()

    )

    return {

        "success": True,

        "count": len(reports),

        "history": [

            {

                "id": report.id,

                "title": report.report_title,

                "type": report.report_type,

                "summary": report.executive_summary,

                "file": report.file_path,

                "created_at": report.created_at,

            }

            for report in reports

        ],

    }


@router.delete("/history")
def clear_reports(
    db: Session = Depends(get_db),
):

    business_id = 1

    (

        db.query(Report)

        .filter(
            Report.business_id == business_id
        )

        .delete()

    )

    db.commit()

    return {

        "success": True,

        "message": "Report history cleared."

    }