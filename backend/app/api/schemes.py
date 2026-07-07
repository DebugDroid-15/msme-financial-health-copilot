from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.services.scheme_service import SchemeRecommendationService

router = APIRouter()


@router.get("/")
def recommended_schemes(
    db: Session = Depends(get_db),
):

    business_id = 1

    recommendations = (
        SchemeRecommendationService(db)
        .generate(business_id)
    )

    return {

        "success": True,

        "count": len(recommendations),

        "schemes": recommendations,

    }