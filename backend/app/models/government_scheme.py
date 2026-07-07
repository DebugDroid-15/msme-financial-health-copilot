from sqlalchemy import Boolean
from sqlalchemy import Column
from sqlalchemy import Float
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.database import Base


class GovernmentScheme(Base):
    __tablename__ = "government_schemes"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    scheme_name = Column(
        String,
        nullable=False,
    )

    ministry = Column(
        String,
    )

    description = Column(
        String,
    )

    category = Column(
        String,
    )

    minimum_score = Column(
        Float,
        default=0,
    )

    maximum_score = Column(
        Float,
        default=100,
    )

    business_type = Column(
        String,
    )

    subsidy = Column(
        String,
    )

    loan_limit = Column(
        String,
    )

    active = Column(
        Boolean,
        default=True,
    )