from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.sql import func

from app.database.database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    business_id = Column(
        Integer,
        ForeignKey("business_profiles.id"),
    )

    document_type = Column(
        String,
    )

    file_name = Column(
        String,
    )

    file_path = Column(
        String,
    )

    status = Column(
        String,
        default="Processed",
    )

    uploaded_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )