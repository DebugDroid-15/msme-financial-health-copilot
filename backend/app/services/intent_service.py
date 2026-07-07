from enum import Enum


class Intent(str, Enum):
    FINANCIAL_SCORE = "financial_score"
    RISK = "risk"
    SCHEMES = "schemes"
    IMPROVEMENT = "improvement"
    REPORT = "report"
    DOCUMENT = "document"
    GREETING = "greeting"
    UNKNOWN = "unknown"


class IntentService:

    def detect(self, question: str) -> Intent:

        q = question.lower()

        if any(word in q for word in [
            "hello",
            "hi",
            "hey",
            "good morning",
            "good evening",
        ]):
            return Intent.GREETING

        if any(word in q for word in [
            "score",
            "financial health",
            "health card",
            "rating",
        ]):
            return Intent.FINANCIAL_SCORE

        if any(word in q for word in [
            "risk",
            "danger",
            "safe",
        ]):
            return Intent.RISK

        if any(word in q for word in [
            "scheme",
            "loan",
            "government",
            "subsidy",
        ]):
            return Intent.SCHEMES

        if any(word in q for word in [
            "improve",
            "increase",
            "better",
            "recommendation",
            "suggest",
        ]):
            return Intent.IMPROVEMENT

        if any(word in q for word in [
            "report",
            "summary",
            "analysis",
        ]):
            return Intent.REPORT

        if any(word in q for word in [
            "document",
            "upload",
            "gst",
            "upi",
            "bank",
            "epfo",
        ]):
            return Intent.DOCUMENT

        return Intent.UNKNOWN