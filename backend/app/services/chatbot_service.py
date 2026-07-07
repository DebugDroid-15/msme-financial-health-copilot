from sqlalchemy.orm import Session

from app.models.business_profile import BusinessProfile
from app.models.document import Document
from app.models.financial_score import FinancialScore
from app.models.government_scheme import GovernmentScheme
from app.models.matched_scheme import MatchedScheme
from app.models.report import Report

from app.services.intent_service import Intent
from app.services.intent_service import IntentService
from app.services.response_builder import ResponseBuilder


class ChatbotService:

    def __init__(self, db: Session):
        self.db = db
        self.intent_service = IntentService()

    def reply(
        self,
        business_id: int,
        question: str,
    ):

        intent = self.intent_service.detect(question)

        if intent == Intent.GREETING:
            return {
                "answer": ResponseBuilder.build(intent, "")
            }

        business = (
            self.db.query(BusinessProfile)
            .filter(
                BusinessProfile.id == business_id
            )
            .first()
        )

        if business is None:

            return {
                "answer": "Business profile not found."
            }

        score = (
            self.db.query(FinancialScore)
            .filter(
                FinancialScore.business_id == business_id
            )
            .first()
        )

        if score is None:

            return {
                "answer": "Financial Health Card has not been generated yet."
            }

        if intent == Intent.FINANCIAL_SCORE:

            context = (
                f"Business: {business.business_name}\n"
                f"Overall Financial Health Score: {score.overall_score}\n"
                f"Funding Readiness: {score.funding_readiness}\n"
                f"Risk Level: {score.risk_level}\n"
                f"Liquidity Score: {score.liquidity_score}\n"
                f"Profitability Score: {score.profitability_score}\n"
                f"Cash Flow Score: {score.cashflow_score}\n"
                f"Compliance Score: {score.compliance_score}\n"
                f"Digital Score: {score.digital_score}\n"
                f"Employment Score: {score.employment_score}"
            )

            return {
                "answer": context
            }

        if intent == Intent.RISK:

            context = (
                f"Current Risk Level: {score.risk_level}\n\n"
                "Risk assessment considers:\n"
                "- Liquidity\n"
                "- Cash Flow\n"
                "- Profitability\n"
                "- GST Compliance\n"
                "- Digital Transactions\n"
                "- Business Growth\n"
                "- Employment Stability"
            )

            return {
                "answer": context
            }

        if intent == Intent.SCHEMES:

            matched = (
                self.db.query(MatchedScheme)
                .filter(
                    MatchedScheme.business_id == business_id
                )
                .all()
            )

            if not matched:

                return {
                    "answer": "No government schemes are currently available."
                }

            response = []

            for item in matched:

                scheme = (
                    self.db.query(GovernmentScheme)
                    .filter(
                        GovernmentScheme.id == item.scheme_id
                    )
                    .first()
                )

                if scheme:

                    response.append(

                        f"• {scheme.scheme_name}"
                        f" ({item.eligibility_score}% eligible)"

                    )

            return {
                "answer": "\n".join(response)
            }

        if intent == Intent.REPORT:

            reports = (
                self.db.query(Report)
                .filter(
                    Report.business_id == business_id
                )
                .all()
            )

            if not reports:

                return {
                    "answer": "No reports have been generated."
                }

            response = []

            for report in reports:

                response.append(report.report_title)

            return {

                "answer":
                "Available Reports:\n\n"
                + "\n".join(response)

            }

        if intent == Intent.DOCUMENT:

            docs = (
                self.db.query(Document)
                .filter(
                    Document.business_id == business_id
                )
                .all()
            )

            if not docs:

                return {
                    "answer": "No documents uploaded."
                }

            response = []

            for doc in docs:

                response.append(

                    f"{doc.document_type} ({doc.status})"

                )

            return {

                "answer":
                "Uploaded Documents:\n\n"
                + "\n".join(response)

            }

        if intent == Intent.IMPROVEMENT:

            context = (
                "Recommendations:\n\n"
                "• Improve GST compliance\n"
                "• Increase digital payment adoption\n"
                "• Maintain healthy cash flow\n"
                "• Improve average bank balance\n"
                "• Reduce unnecessary expenses\n"
                "• Increase profitability\n"
                "• Upload latest financial documents regularly"
            )

            return {
                "answer": context
            }

        return {
            "answer": ResponseBuilder.build(
                Intent.UNKNOWN,
                "",
            )
        }