from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.services.dashboard_service import DashboardService

router = APIRouter()


@router.get("/")
def dashboard(
    db: Session = Depends(get_db),
):

    business_id = 1

    return DashboardService(
        db
    ).build_dashboard(
        business_id
    )