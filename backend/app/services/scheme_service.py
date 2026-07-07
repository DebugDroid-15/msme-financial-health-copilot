from sqlalchemy.orm import Session

from app.models.business_profile import BusinessProfile
from app.models.financial_score import FinancialScore
from app.models.government_scheme import GovernmentScheme
from app.models.matched_scheme import MatchedScheme


class SchemeRecommendationService:

    def __init__(self, db: Session):
        self.db = db

    def generate(self, business_id: int):

        business = (
            self.db.query(BusinessProfile)
            .filter(BusinessProfile.id == business_id)
            .first()
        )

        if business is None:
            return []

        score = (
            self.db.query(FinancialScore)
            .filter(FinancialScore.business_id == business_id)
            .first()
        )

        if score is None:
            return []

        self.db.query(MatchedScheme).filter(
            MatchedScheme.business_id == business_id
        ).delete()

        self.db.commit()

        schemes = self.db.query(GovernmentScheme).all()

        recommendations = []

        for scheme in schemes:

            if (
                score.overall_score >= scheme.minimum_score
                and score.overall_score <= scheme.maximum_score
            ):

                eligibility = round(

                    (
                        score.overall_score
                        + score.compliance_score
                        + score.digital_score
                    ) / 3

                )

                recommendation = MatchedScheme(

                    business_id=business_id,

                    scheme_id=scheme.id,

                    eligibility_score=eligibility,

                    recommendation=(
                        "Highly Recommended"
                        if eligibility >= 90
                        else "Recommended"
                    ),

                )

                self.db.add(recommendation)

                recommendations.append(

                    {
                        "scheme": scheme.scheme_name,
                        "eligibility": eligibility,
                        "recommendation": recommendation.recommendation,
                        "loan_limit": scheme.loan_limit,
                        "subsidy": scheme.subsidy,
                    }

                )

        self.db.commit()

        recommendations.sort(
            key=lambda x: x["eligibility"],
            reverse=True,
        )

        return recommendations