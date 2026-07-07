from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.sql import func

from app.database.database import Base


class BusinessProfile(Base):
    __tablename__ = "business_profiles"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
    )

    business_name = Column(
        String,
        nullable=False,
    )

    owner_name = Column(
        String,
        nullable=False,
    )

    business_type = Column(
        String,
    )

    gst_number = Column(
        String,
    )

    pan_number = Column(
        String,
    )

    udyam_number = Column(
        String,
    )

    address = Column(
        String,
    )

    city = Column(
        String,
    )

    state = Column(
        String,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )