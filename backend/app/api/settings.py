from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def settings():
    return {
        "owner": "Rajesh Kumar",
        "business": "ABC Manufacturing Pvt Ltd",
        "subscription": "Enterprise",
        "notifications": True,
        "two_factor": True,
    }