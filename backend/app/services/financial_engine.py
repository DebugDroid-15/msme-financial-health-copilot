from sqlalchemy.orm import Session

from app.models.financial_record import FinancialRecord
from app.models.financial_score import FinancialScore


class FinancialHealthEngine:

    def __init__(self, db: Session):
        self.db = db

    def calculate(self, business_id: int):

        records = (
            self.db.query(FinancialRecord)
            .filter(FinancialRecord.business_id == business_id)
            .all()
        )

        if not records:
            return None

        count = len(records)

        avg_profit = sum(r.profit for r in records) / count

        avg_cashflow = sum(r.cash_flow for r in records) / count

        avg_bank = sum(r.bank_balance for r in records) / count

        avg_gst = sum(r.gst_filing_score for r in records) / count

        avg_upi_ratio = (
            sum(r.digital_payment_ratio for r in records) / count
        )

        avg_employees = (
            sum(r.employee_count for r in records) / count
        )

        liquidity_score = min(
            100,
            round(avg_bank / 10000),
        )

        profitability_score = min(
            100,
            round(avg_profit / 2500),
        )

        cashflow_score = min(
            100,
            round(avg_cashflow / 2500),
        )

        compliance_score = round(avg_gst)

        digital_score = round(avg_upi_ratio * 100)

        employment_score = min(
            100,
            round(avg_employees * 4),
        )

        revenue_growth = (
            records[0].revenue - records[-1].revenue
        ) / records[-1].revenue

        growth_score = min(
            100,
            max(
                60,
                round(80 + revenue_growth * 100),
            ),
        )

        funding_readiness = round(
            (
                liquidity_score
                + profitability_score
                + cashflow_score
                + compliance_score
                + digital_score
            )
            / 5
        )

        overall_score = round(
            (
                liquidity_score
                + profitability_score
                + cashflow_score
                + compliance_score
                + growth_score
                + digital_score
                + employment_score
            )
            / 7
        )

        if overall_score >= 85:
            risk = "Low"

        elif overall_score >= 70:
            risk = "Medium"

        else:
            risk = "High"

        existing = (
            self.db.query(FinancialScore)
            .filter(
                FinancialScore.business_id == business_id
            )
            .first()
        )

        if existing:

            existing.overall_score = overall_score

            existing.liquidity_score = liquidity_score

            existing.profitability_score = profitability_score

            existing.cashflow_score = cashflow_score

            existing.compliance_score = compliance_score

            existing.growth_score = growth_score

            existing.digital_score = digital_score

            existing.employment_score = employment_score

            existing.funding_readiness = funding_readiness

            existing.risk_level = risk

        else:

            score = FinancialScore(

                business_id=business_id,

                overall_score=overall_score,

                liquidity_score=liquidity_score,

                profitability_score=profitability_score,

                cashflow_score=cashflow_score,

                compliance_score=compliance_score,

                growth_score=growth_score,

                digital_score=digital_score,

                employment_score=employment_score,

                funding_readiness=funding_readiness,

                risk_level=risk,

            )

            self.db.add(score)

        self.db.commit()

        return {
            "overall_score": overall_score,
            "liquidity": liquidity_score,
            "profitability": profitability_score,
            "cashflow": cashflow_score,
            "compliance": compliance_score,
            "growth": growth_score,
            "digital": digital_score,
            "employment": employment_score,
            "funding_readiness": funding_readiness,
            "risk": risk,
        }