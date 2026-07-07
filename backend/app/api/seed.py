from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.dummy_data_engine import DummyDataEngine

from fastapi import Depends

router = APIRouter()


@router.post("/")
def seed_database(
    db: Session = Depends(get_db),
):
    engine = DummyDataEngine(db)

    return engine.seed()