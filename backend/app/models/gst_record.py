from sqlalchemy import Column
from sqlalchemy import Date
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.database import Base


class GSTRecord(Base):
    __tablename__ = "gst_records"

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

    filing_month = Column(
        Date,
        nullable=False,
    )

    gst_turnover = Column(
        Float,
        default=0,
    )

    gst_tax_paid = Column(
        Float,
        default=0,
    )

    filing_status = Column(
        String,
        default="Filed",
    )

    delay_days = Column(
        Integer,
        default=0,
    )

    compliance_score = Column(
        Float,
        default=100,
    )