import Hero from "./hero/Hero";
import StatsCards from "./hero/StatsCards";
import RecommendationBanner from "./hero/RecommendationBanner";

import ReportsLibrary from "./library/ReportsLibrary";

import BusinessIntelligence from "./intelligence/BusinessIntelligence";

import RiskDashboard from "./risk/RiskDashboard";
import RiskHeatmap from "./risk/RiskHeatmap";

import FundingTimeline from "./timeline/FundingTimeline";

import BusinessForecast from "./forecast/BusinessForecast";

import SchemeComparison from "./comparison/SchemeComparison";

import FinancialBreakdown from "./financial/FinancialBreakdown";

import ExecutiveActionPlan from "./actions/ExecutiveActionPlan";
import StrategicInsights from "./actions/StrategicInsights";
import ExecutiveVerdict from "./actions/ExecutiveVerdict";

import DownloadCenter from "./download/DownloadCenter";

import PresentationMode from "./presentation/PresentationMode";

export default function ReportsPage() {
  return (
    <div className="space-y-8">

      <Hero />

      <StatsCards />

      <RecommendationBanner />

      <ReportsLibrary />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <BusinessIntelligence />
        </div>

        <RiskDashboard />

      </div>

      <FundingTimeline />

      <BusinessForecast />

      <SchemeComparison />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <FinancialBreakdown />
        </div>

        <RiskHeatmap />

      </div>

      <ExecutiveActionPlan />

      <DownloadCenter />

      <StrategicInsights />

      <ExecutiveVerdict />

      <PresentationMode />

    </div>
  );
}