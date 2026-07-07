from fastapi import APIRouter

from app.api.dashboard import router as dashboard_router
from app.api.upload import router as upload_router
from app.api.chatbot import router as chatbot_router
from app.api.reports import router as reports_router
from app.api.schemes import router as schemes_router
from app.api.notifications import router as notifications_router
from app.api.settings import router as settings_router
from app.api.financial import router as financial_router
from app.api.seed import router as seed_router

router = APIRouter()

router.include_router(
    dashboard_router,
    prefix="/dashboard",
    tags=["Dashboard"],
)

router.include_router(
    upload_router,
    prefix="/upload",
    tags=["Upload"],
)

router.include_router(
    chatbot_router,
    prefix="/chatbot",
    tags=["Chatbot"],
)

router.include_router(
    reports_router,
    prefix="/reports",
    tags=["Reports"],
)

router.include_router(
    schemes_router,
    prefix="/schemes",
    tags=["Government Schemes"],
)

router.include_router(
    notifications_router,
    prefix="/notifications",
    tags=["Notifications"],
)

router.include_router(
    settings_router,
    prefix="/settings",
    tags=["Settings"],
)

router.include_router(
    financial_router,
    prefix="/financial",
    tags=["Financial"],
)

router.include_router(
    seed_router,
    prefix="/seed",
    tags=["Database Seeder"],
)