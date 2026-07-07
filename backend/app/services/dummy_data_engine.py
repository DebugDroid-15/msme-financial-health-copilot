import random
from datetime import date
from datetime import timedelta

from sqlalchemy.orm import Session

from app.models.business_profile import BusinessProfile
from app.models.chat_history import ChatHistory
from app.models.document import Document
from app.models.financial_record import FinancialRecord
from app.models.financial_score import FinancialScore
from app.models.government_scheme import GovernmentScheme
from app.models.matched_scheme import MatchedScheme
from app.models.notification import Notification
from app.models.report import Report
from app.models.user import User


class DummyDataEngine:

    def __init__(self, db: Session):
        self.db = db

    def seed(self):

        if self.db.query(User).first():
            return {
                "message": "Database already seeded."
            }

        user = User(
            full_name="Rajesh Kumar",
            email="rajesh@msmecopilot.in",
            password="demo123",
            phone="9876543210",
        )

        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)

        business = BusinessProfile(
            user_id=user.id,
            business_name="ABC Manufacturing Pvt Ltd",
            owner_name="Rajesh Kumar",
            business_type="Manufacturing",
            gst_number="29ABCDE1234F1Z5",
            pan_number="ABCDE1234F",
            udyam_number="UDYAM-KA-123456",
            address="Industrial Area",
            city="Bengaluru",
            state="Karnataka",
        )

        self.db.add(business)
        self.db.commit()
        self.db.refresh(business)

        revenue = 700000

        today = date.today()

        for month in range(12):

            revenue += random.randint(-30000, 60000)

            expenses = revenue * random.uniform(0.62, 0.82)

            profit = revenue - expenses

            gst_score = random.randint(88, 100)

            gst_delay = random.randint(0, 3)

            upi_transactions = random.randint(850, 2400)

            upi_volume = random.randint(350000, 900000)

            employee_count = random.randint(18, 30)

            salary_paid = employee_count * random.randint(22000, 31000)

            avg_bank = random.randint(450000, 900000)

            monthly_credit = revenue + random.randint(50000, 100000)

            monthly_debit = expenses + salary_paid

            record = FinancialRecord(

                business_id=business.id,

                record_date=today - timedelta(days=30 * month),

                revenue=round(revenue, 2),

                expenses=round(expenses, 2),

                profit=round(profit, 2),

                cash_flow=random.randint(120000, 250000),

                bank_balance=random.randint(300000, 800000),

                gst_paid=revenue * 0.18,

                gst_filing_score=gst_score,

                gst_delay_days=gst_delay,

                upi_transactions=upi_transactions,

                upi_volume=upi_volume,

                digital_payment_ratio=random.uniform(0.65, 0.95),

                employee_count=employee_count,

                salary_paid=salary_paid,

                epfo_compliance=True,

                average_bank_balance=avg_bank,

                monthly_credit=monthly_credit,

                monthly_debit=monthly_debit,

            )

            self.db.add(record)

        score = FinancialScore(

            business_id=business.id,

            overall_score=91,

            liquidity_score=88,

            profitability_score=90,

            cashflow_score=93,

            compliance_score=97,

            growth_score=86,

            digital_score=94,

            employment_score=84,

            funding_readiness=89,

            risk_level="Low",

        )

        self.db.add(score)

        schemes = [

            "CGTMSE",

            "PMEGP",

            "Stand-Up India",

            "MSME Champions",

            "Credit Linked Capital Subsidy",

        ]

        self.db.commit()

        scheme_objects = []

        for scheme in schemes:

            obj = GovernmentScheme(

                scheme_name=scheme,

                ministry="Government of India",

                description=f"{scheme} Financial Support",

                category="Finance",

                minimum_score=60,

                maximum_score=100,

                business_type="Manufacturing",

                subsidy="Available",

                loan_limit="₹2 Crore",

            )

            self.db.add(obj)

            scheme_objects.append(obj)

        self.db.commit()

        for scheme in scheme_objects:

            self.db.refresh(scheme)

            self.db.add(

                MatchedScheme(

                    business_id=business.id,

                    scheme_id=scheme.id,

                    eligibility_score=random.randint(84, 99),

                    recommendation="Highly Recommended",

                )

            )

        docs = [

            "GST Return",

            "Bank Statement",

            "Balance Sheet",

            "Profit & Loss",

            "Invoice Register",

            "Udyam Certificate",

        ]

        for doc in docs:

            self.db.add(

                Document(

                    business_id=business.id,

                    document_type=doc,

                    file_name=f"{doc}.pdf",

                    file_path=f"/uploads/{doc}.pdf",

                    status="Processed",

                )

            )

        reports = [

            "Financial Health Report",

            "Risk Assessment",

            "Funding Readiness",

            "Cash Flow Analysis",

            "Executive Summary",

        ]

        for report in reports:

            self.db.add(

                Report(

                    business_id=business.id,

                    report_type=report,

                    report_title=report,

                    executive_summary="Automatically generated by MSME Financial Health Copilot.",

                    file_path=f"/reports/{report}.pdf",

                )

            )

        notifications = [

            "Financial Health Score Updated",

            "GST Successfully Analysed",

            "UPI Data Imported",

            "Government Scheme Matched",

            "Funding Readiness Improved",

            "Executive Report Generated",

        ]

        for notification in notifications:

            self.db.add(

                Notification(

                    business_id=business.id,

                    title=notification,

                    message=notification,

                    notification_type="success",

                )

            )

        self.db.add(

            ChatHistory(

                business_id=business.id,

                user_message="How is my financial health?",

                ai_response="Your business has a Financial Health Score of 91 with excellent GST compliance, strong digital payment activity and healthy cash flow.",

            )

        )

        self.db.commit()

        return {

            "message": "Database seeded successfully."

        }