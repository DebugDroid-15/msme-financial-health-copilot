from pathlib import Path


class IngestionService:

    GST_KEYWORDS = [
        "gst",
        "gstr",
        "gst return",
    ]

    BANK_KEYWORDS = [
        "bank",
        "statement",
        "account",
    ]

    UPI_KEYWORDS = [
        "upi",
        "phonepe",
        "gpay",
        "googlepay",
        "paytm",
        "bhim",
    ]

    EPFO_KEYWORDS = [
        "epfo",
        "pf",
        "provident",
    ]

    BALANCE_SHEET_KEYWORDS = [
        "balance",
        "balance_sheet",
    ]

    PNL_KEYWORDS = [
        "profit",
        "loss",
        "p&l",
        "pandl",
    ]

    def detect_document_type(self, filename: str) -> str:

        name = Path(filename).stem.lower()

        if any(word in name for word in self.GST_KEYWORDS):
            return "GST"

        if any(word in name for word in self.BANK_KEYWORDS):
            return "BANK_STATEMENT"

        if any(word in name for word in self.UPI_KEYWORDS):
            return "UPI"

        if any(word in name for word in self.EPFO_KEYWORDS):
            return "EPFO"

        if any(word in name for word in self.BALANCE_SHEET_KEYWORDS):
            return "BALANCE_SHEET"

        if any(word in name for word in self.PNL_KEYWORDS):
            return "PROFIT_LOSS"

        return "UNKNOWN"

    def simulate_extraction(
        self,
        filename: str,
    ):

        document_type = self.detect_document_type(filename)

        return {

            "document_type": document_type,

            "status": "Processed",

            "confidence": 97.8,

            "fields": self.mock_fields(document_type),

        }

    def mock_fields(
        self,
        document_type: str,
    ):

        if document_type == "GST":

            return {

                "gst_turnover": 895000,

                "gst_paid": 161100,

                "filing_delay_days": 0,

                "compliance_score": 98,

            }

        if document_type == "BANK_STATEMENT":

            return {

                "average_balance": 685000,

                "monthly_credit": 835000,

                "monthly_debit": 602000,

            }

        if document_type == "UPI":

            return {

                "transactions": 1865,

                "volume": 714000,

                "success_rate": 99.2,

                "digital_ratio": 0.91,

            }

        if document_type == "EPFO":

            return {

                "employees": 27,

                "salary_paid": 624000,

                "compliance": True,

            }

        if document_type == "BALANCE_SHEET":

            return {

                "assets": 4200000,

                "liabilities": 1540000,

                "equity": 2660000,

            }

        if document_type == "PROFIT_LOSS":

            return {

                "revenue": 825000,

                "expenses": 598000,

                "profit": 227000,

            }

        return {}