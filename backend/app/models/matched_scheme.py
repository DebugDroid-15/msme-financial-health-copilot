from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.sql import func

from app.database.database import Base


class MatchedScheme(Base):
    __tablename__ = "matched_schemes"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    business_id = Column(
        Integer,
        ForeignKey("business_profiles.id"),
    )

    scheme_id = Column(
        Integer,
        ForeignKey("government_schemes.id"),
    )

    eligibility_score = Column(
        Integer,
        default=0,
    )

    recommendation = Column(
        String,
        default="Recommended",
    )

    matched_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )