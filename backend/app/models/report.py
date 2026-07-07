from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.sql import func

from app.database.database import Base


class Report(Base):
    __tablename__ = "reports"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    business_id = Column(
        Integer,
        ForeignKey("business_profiles.id"),
    )

    report_type = Column(
        String,
    )

    report_title = Column(
        String,
    )

    executive_summary = Column(
        String,
    )

    file_path = Column(
        String,
    )

    generated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )