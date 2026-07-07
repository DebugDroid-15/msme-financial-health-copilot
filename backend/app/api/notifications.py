from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def notifications():
    return {
        "count": 6,
        "latest": [
            "Financial score updated",
            "New government scheme matched",
            "Executive report generated",
            "GST successfully processed",
        ],
    }