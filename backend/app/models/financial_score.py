from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.sql import func

from app.database.database import Base


class FinancialScore(Base):
    __tablename__ = "financial_scores"

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

    overall_score = Column(
        Float,
        default=0,
    )

    liquidity_score = Column(
        Float,
        default=0,
    )

    profitability_score = Column(
        Float,
        default=0,
    )

    cashflow_score = Column(
        Float,
        default=0,
    )

    compliance_score = Column(
        Float,
        default=0,
    )

    growth_score = Column(
        Float,
        default=0,
    )

    digital_score = Column(
        Float,
        default=0,
    )

    employment_score = Column(
        Float,
        default=0,
    )

    funding_readiness = Column(
        Float,
        default=0,
    )

    risk_level = Column(
        String,
        default="Low",
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )