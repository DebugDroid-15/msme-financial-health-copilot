from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router
from app.database.create_tables import create_tables

app = FastAPI(
    title="MSME Financial Health Copilot API",
    version="1.0.0",
)

create_tables()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
async def root():
    return {
        "success": True,
        "message": "MSME Financial Health Copilot Backend Running",
    }