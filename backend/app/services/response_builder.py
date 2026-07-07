from app.services.intent_service import Intent


class ResponseBuilder:

    @staticmethod
    def greeting():

        return (
            "Hello! I can help you understand your Financial "
            "Health Card, government scheme eligibility, "
            "business risks, reports and funding readiness."
        )

    @staticmethod
    def unknown():

        return (
            "I couldn't understand your request. "
            "You can ask about financial health, reports, "
            "government schemes, uploaded documents, "
            "risk analysis or funding readiness."
        )

    @staticmethod
    def build(intent, context):

        if intent == Intent.GREETING:
            return ResponseBuilder.greeting()

        if intent == Intent.UNKNOWN:
            return ResponseBuilder.unknown()

        return context