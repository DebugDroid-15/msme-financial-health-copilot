from sqlalchemy.orm import Session

from app.models.financial_record import FinancialRecord
from app.models.financial_score import FinancialScore


class AnalyticsService:

    def __init__(self, db: Session):
        self.db = db

    def dashboard_metrics(self, business_id: int):

        records = (
            self.db.query(FinancialRecord)
            .filter(FinancialRecord.business_id == business_id)
            .order_by(FinancialRecord.record_date.asc())
            .all()
        )

        if not records:
            return None

        score = (
            self.db.query(FinancialScore)
            .filter(FinancialScore.business_id == business_id)
            .first()
        )

        revenue = [round(r.revenue, 2) for r in records]
        expenses = [round(r.expenses, 2) for r in records]
        profit = [round(r.profit, 2) for r in records]
        cashflow = [round(r.cash_flow, 2) for r in records]

        months = [
            r.record_date.strftime("%b")
            for r in records
        ]

        revenue_growth = round(
            ((revenue[-1] - revenue[0]) / revenue[0]) * 100,
            2,
        )

        profit_growth = round(
            ((profit[-1] - profit[0]) / profit[0]) * 100,
            2,
        )

        return {

            "months": months,

            "revenue": revenue,

            "expenses": expenses,

            "profit": profit,

            "cashflow": cashflow,

            "revenue_growth": revenue_growth,

            "profit_growth": profit_growth,

            "overall_score": score.overall_score,

            "risk": score.risk_level,

            "funding_readiness": score.funding_readiness,

        }