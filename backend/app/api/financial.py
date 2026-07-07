from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def financial():
    return {
        "overall_score": 91,
        "liquidity": 88,
        "profitability": 90,
        "cash_flow": 92,
        "growth": 86,
        "compliance": 97,
        "digital_transactions": 94,
        "employment": 84,
        "funding_readiness": 89,
        "risk": "Low",
    }