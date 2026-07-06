import Hero from "./hero/Hero";
import StatsCards from "./hero/StatsCards";

import SuccessPredictor from "./predictor/SuccessPredictor";

import RecommendedSchemes from "./recommendations/RecommendedSchemes";
import CompareTable from "./recommendations/CompareTable";

import EligibilityProfile from "./sidebar/EligibilityProfile";
import DocumentReadiness from "./sidebar/DocumentReadiness";

import WhyRecommended from "./analysis/WhyRecommended";
import ImpactSimulator from "./analysis/ImpactSimulator";

import FundingDashboard from "./dashboard/FundingDashboard";
import RiskAssessment from "./dashboard/RiskAssessment";

import SuccessStories from "./stories/SuccessStories";

import ActionCenter from "./actions/ActionCenter";
import QuickQuestions from "./actions/QuickQuestions";

export default function SchemesPage() {
  return (
    <div className="space-y-8">

      <Hero />

      <StatsCards />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="space-y-8 xl:col-span-2">
          <SuccessPredictor />
          <RecommendedSchemes />
        </div>

        <div className="space-y-8">
          <EligibilityProfile />
          <DocumentReadiness />
        </div>

      </div>

      <CompareTable />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <WhyRecommended />
        </div>

        <ImpactSimulator />

      </div>

      <FundingDashboard />

      <RiskAssessment />

      <SuccessStories />

      <div className="grid gap-8 xl:grid-cols-2">

        <ActionCenter />

        <QuickQuestions />

      </div>

    </div>
  );
}