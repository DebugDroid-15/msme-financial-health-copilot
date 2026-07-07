from fastapi import APIRouter
from fastapi import Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.chat_history import ChatHistory
from app.services.chatbot_service import ChatbotService

router = APIRouter()


class ChatRequest(BaseModel):
    question: str


@router.post("/")
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
):

    business_id = 1

    chatbot = ChatbotService(db)

    response = chatbot.reply(
        business_id,
        request.question,
    )

    history = ChatHistory(
        business_id=business_id,
        user_message=request.question,
        ai_response=response["answer"],
    )

    db.add(history)

    db.commit()

    return {
        "success": True,
        "question": request.question,
        "answer": response["answer"],
    }


@router.get("/history")
def history(
    db: Session = Depends(get_db),
):

    business_id = 1

    chats = (
        db.query(ChatHistory)
        .filter(
            ChatHistory.business_id == business_id
        )
        .order_by(
            ChatHistory.created_at.desc()
        )
        .all()
    )

    return {
        "success": True,
        "count": len(chats),
        "history": [
            {
                "question": chat.user_message,
                "answer": chat.ai_response,
                "time": chat.created_at,
            }
            for chat in chats
        ],
    }


@router.delete("/history")
def clear_history(
    db: Session = Depends(get_db),
):

    business_id = 1

    (
        db.query(ChatHistory)
        .filter(
            ChatHistory.business_id == business_id
        )
        .delete()
    )

    db.commit()

    return {
        "success": True,
        "message": "Chat history cleared.",
    }