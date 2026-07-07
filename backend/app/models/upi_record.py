from sqlalchemy import Column
from sqlalchemy import Date
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer

from app.database.database import Base


class UPIRecord(Base):
    __tablename__ = "upi_records"

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

    transaction_month = Column(
        Date,
        nullable=False,
    )

    total_transactions = Column(
        Integer,
        default=0,
    )

    total_volume = Column(
        Float,
        default=0,
    )

    success_rate = Column(
        Float,
        default=100,
    )

    digital_ratio = Column(
        Float,
        default=0,
    )