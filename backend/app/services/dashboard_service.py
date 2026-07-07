from sqlalchemy.orm import Session

from app.models.business_profile import BusinessProfile
from app.models.document import Document
from app.models.financial_score import FinancialScore
from app.models.notification import Notification
from app.models.report import Report

from app.services.analytics_service import AnalyticsService


class DashboardService:

    def __init__(self, db: Session):
        self.db = db

    def build_dashboard(
        self,
        business_id: int,
    ):

        business = (
            self.db.query(BusinessProfile)
            .filter(
                BusinessProfile.id == business_id
            )
            .first()
        )

        if business is None:

            return {
                "success": False,
                "message": "Business not found."
            }

        score = (
            self.db.query(FinancialScore)
            .filter(
                FinancialScore.business_id == business_id
            )
            .first()
        )

        analytics = AnalyticsService(
            self.db
        ).dashboard_metrics(
            business_id
        )

        latest = len(
            analytics["revenue"]
        ) - 1

        notifications = (
            self.db.query(Notification)
            .filter(
                Notification.business_id == business_id
            )
            .count()
        )

        reports = (
            self.db.query(Report)
            .filter(
                Report.business_id == business_id
            )
            .count()
        )

        documents = (
            self.db.query(Document)
            .filter(
                Document.business_id == business_id
            )
            .order_by(
                Document.uploaded_at.desc()
            )
            .limit(5)
            .all()
        )

        recent_documents = [

            {

                "name": document.file_name,

                "type": document.document_type,

                "status": document.status,

            }

            for document in documents

        ]

        insights = []

        if score.compliance_score >= 90:
            insights.append(
                "Excellent GST compliance maintained."
            )

        if score.digital_score >= 90:
            insights.append(
                "Digital payment adoption is excellent."
            )

        if score.cashflow_score >= 85:
            insights.append(
                "Business cash flow remains healthy."
            )

        if score.profitability_score < 75:
            insights.append(
                "Profitability can be improved."
            )

        priorities = [

            "Maintain GST compliance",

            "Upload latest bank statement",

            "Review funding opportunities",

        ]

        loan = {

            "risk": score.risk_level,

            "funding_readiness": score.funding_readiness,

            "recommended_limit":

                "₹2 Crore"

                if score.overall_score >= 90

                else "₹1 Crore",

            "approval_probability":

                min(
                    99,
                    score.overall_score
                ),

        }

        return {

            "success": True,

            "business": {

                "id": business.id,

                "business_name": business.business_name,

                "owner_name": business.owner_name,

                "business_type": business.business_type,

                "city": business.city,

                "state": business.state,

            },

            "financial": {

                "overall_score": score.overall_score,

                "liquidity": score.liquidity_score,

                "profitability": score.profitability_score,

                "cashflow": score.cashflow_score,

                "growth": score.growth_score,

                "compliance": score.compliance_score,

                "digital": score.digital_score,

                "employment": score.employment_score,

                "funding_readiness": score.funding_readiness,

                "risk": score.risk_level,

            },

            "latest_month": {

                "revenue":
                    analytics["revenue"][latest],

                "expenses":
                    analytics["expenses"][latest],

                "profit":
                    analytics["profit"][latest],

                "cash_flow":
                    analytics["cashflow"][latest],

            },

            "analytics": analytics,

            "loan": loan,

            "insights": insights,

            "priorities": priorities,

            "recent_documents": recent_documents,

            "summary": {

                "notifications": notifications,

                "reports": reports,

            },

        }