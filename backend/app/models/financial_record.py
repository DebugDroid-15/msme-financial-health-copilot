from sqlalchemy import Boolean
from sqlalchemy import Column
from sqlalchemy import Date
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer

from app.database.database import Base


class FinancialRecord(Base):
    __tablename__ = "financial_records"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    business_id = Column(
        Integer,
        ForeignKey("business_profiles.id"),
        nullable=False,
    )

    record_date = Column(
        Date,
    )

    # Core Financials

    revenue = Column(
        Float,
        default=0,
    )

    expenses = Column(
        Float,
        default=0,
    )

    profit = Column(
        Float,
        default=0,
    )

    cash_flow = Column(
        Float,
        default=0,
    )

    bank_balance = Column(
        Float,
        default=0,
    )

    # GST

    gst_paid = Column(
        Float,
        default=0,
    )

    gst_filing_score = Column(
        Float,
        default=100,
    )

    gst_delay_days = Column(
        Integer,
        default=0,
    )

    # UPI

    upi_transactions = Column(
        Integer,
        default=0,
    )

    upi_volume = Column(
        Float,
        default=0,
    )

    digital_payment_ratio = Column(
        Float,
        default=0,
    )

    # EPFO

    employee_count = Column(
        Integer,
        default=0,
    )

    salary_paid = Column(
        Float,
        default=0,
    )

    epfo_compliance = Column(
        Boolean,
        default=True,
    )

    # Account Aggregator

    average_bank_balance = Column(
        Float,
        default=0,
    )

    monthly_credit = Column(
        Float,
        default=0,
    )

    monthly_debit = Column(
        Float,
        default=0,
    )