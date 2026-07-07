from sqlalchemy import Column
from sqlalchemy import Date
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer

from app.database.database import Base


class AARecord(Base):
    __tablename__ = "aa_records"

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

    record_month = Column(
        Date,
        nullable=False,
    )

    average_balance = Column(
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

    credit_debit_ratio = Column(
        Float,
        default=0,
    )