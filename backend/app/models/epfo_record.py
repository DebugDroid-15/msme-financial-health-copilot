from sqlalchemy import Boolean
from sqlalchemy import Column
from sqlalchemy import Date
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer

from app.database.database import Base


class EPFORecord(Base):
    __tablename__ = "epfo_records"

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

    employee_count = Column(
        Integer,
        default=0,
    )

    salary_paid = Column(
        Float,
        default=0,
    )

    compliance = Column(
        Boolean,
        default=True,
    )