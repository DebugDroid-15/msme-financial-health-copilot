from sqlalchemy.orm import Session

from app.models.business_profile import BusinessProfile
from app.models.financial_score import FinancialScore
from app.models.financial_record import FinancialRecord
from app.models.report import Report
from app.models.matched_scheme import MatchedScheme
from app.models.government_scheme import GovernmentScheme


class ReportService:

    def __init__(self, db: Session):
        self.db = db

    def generate(self, business_id: int):

        business = (
            self.db.query(BusinessProfile)
            .filter(BusinessProfile.id == business_id)
            .first()
        )

        if business is None:
            return None

        score = (
            self.db.query(FinancialScore)
            .filter(FinancialScore.business_id == business_id)
            .first()
        )

        latest = (
            self.db.query(FinancialRecord)
            .filter(FinancialRecord.business_id == business_id)
            .order_by(FinancialRecord.record_date.desc())
            .first()
        )

        schemes = (
            self.db.query(MatchedScheme)
            .filter(MatchedScheme.business_id == business_id)
            .all()
        )

        scheme_names = []

        for item in schemes:

            scheme = (
                self.db.query(GovernmentScheme)
                .filter(GovernmentScheme.id == item.scheme_id)
                .first()
            )

            if scheme:
                scheme_names.append(scheme.scheme_name)

        strengths = []

        if score.compliance_score >= 90:
            strengths.append("Excellent GST compliance")

        if score.digital_score >= 90:
            strengths.append("High digital payment adoption")

        if score.cashflow_score >= 85:
            strengths.append("Healthy operating cash flow")

        if score.liquidity_score >= 85:
            strengths.append("Strong liquidity position")

        weaknesses = []

        if score.growth_score < 75:
            weaknesses.append("Revenue growth requires improvement")

        if score.profitability_score < 75:
            weaknesses.append("Profit margin can be improved")

        if score.employment_score < 75:
            weaknesses.append("Limited workforce stability")

        recommendations = [

            "Maintain timely GST filing.",

            "Continue increasing digital transactions.",

            "Maintain positive monthly cash flow.",

            "Improve operating margin through cost optimization.",

            "Upload financial documents regularly.",

        ]

        executive_summary = (
            f"{business.business_name} currently has an Overall "
            f"Financial Health Score of {score.overall_score}. "
            f"The business demonstrates {score.risk_level.lower()} "
            f"risk with a Funding Readiness Score of "
            f"{score.funding_readiness}. "
            f"Revenue for the latest period is ₹{latest.revenue:,.0f} "
            f"with a profit of ₹{latest.profit:,.0f}."
        )

        report = Report(

            business_id=business_id,

            report_type="Executive Report",

            report_title="AI Generated Executive Report",

            executive_summary=executive_summary,

            file_path="/reports/executive.pdf",

        )

        self.db.add(report)

        self.db.commit()

        return {

            "business": business.business_name,

            "financial_health_score": score.overall_score,

            "funding_readiness": score.funding_readiness,

            "risk_level": score.risk_level,

            "executive_summary": executive_summary,

            "strengths": strengths,

            "weaknesses": weaknesses,

            "recommendations": recommendations,

            "recommended_schemes": scheme_names,

            "latest_revenue": latest.revenue,

            "latest_profit": latest.profit,

            "cash_flow": latest.cash_flow,

        }
    
    def executive(self, business_id: int):

        business = (
            self.db.query(BusinessProfile)
            .filter(
                BusinessProfile.id == business_id
            )
            .first()
        )

        if business is None:
            return None

        score = (
            self.db.query(FinancialScore)
            .filter(
                FinancialScore.business_id == business_id
            )
            .first()
        )

        latest = (
            self.db.query(FinancialRecord)
            .filter(
                FinancialRecord.business_id == business_id
            )
            .order_by(
                FinancialRecord.record_date.desc()
            )
            .first()
        )

        schemes = (
            self.db.query(MatchedScheme)
            .filter(
                MatchedScheme.business_id == business_id
            )
            .all()
        )

        scheme_names = []

        for item in schemes:

            scheme = (
                self.db.query(GovernmentScheme)
                .filter(
                    GovernmentScheme.id == item.scheme_id
                )
                .first()
            )

            if scheme:
                scheme_names.append(
                    scheme.scheme_name
                )

        strengths = []

        if score.compliance_score >= 90:
            strengths.append(
                "Excellent GST compliance"
            )

        if score.digital_score >= 90:
            strengths.append(
                "High digital payment adoption"
            )

        if score.cashflow_score >= 85:
            strengths.append(
                "Healthy operating cash flow"
            )

        if score.liquidity_score >= 85:
            strengths.append(
                "Strong liquidity position"
            )

        weaknesses = []

        if score.growth_score < 75:
            weaknesses.append(
                "Revenue growth requires improvement"
            )

        if score.profitability_score < 75:
            weaknesses.append(
                "Profit margin can be improved"
            )

        if score.employment_score < 75:
            weaknesses.append(
                "Limited workforce stability"
            )

        recommendations = [

            "Maintain timely GST filing.",

            "Continue increasing digital transactions.",

            "Maintain positive monthly cash flow.",

            "Improve operating margin through cost optimization.",

            "Upload financial documents regularly.",

        ]

        executive_summary = (
            f"{business.business_name} currently has an Overall "
            f"Financial Health Score of {score.overall_score}. "
            f"The business demonstrates {score.risk_level.lower()} "
            f"risk with a Funding Readiness Score of "
            f"{score.funding_readiness}. "
            f"Revenue for the latest period is ₹{latest.revenue:,.0f} "
            f"with a profit of ₹{latest.profit:,.0f}."
        )

        return {

            "business": business.business_name,

            "financial_health_score": score.overall_score,

            "funding_readiness": score.funding_readiness,

            "risk_level": score.risk_level,

            "executive_summary": executive_summary,

            "strengths": strengths,

            "weaknesses": weaknesses,

            "recommendations": recommendations,

            "recommended_schemes": scheme_names,

            "latest_revenue": latest.revenue,

            "latest_profit": latest.profit,

            "cash_flow": latest.cash_flow,

        }