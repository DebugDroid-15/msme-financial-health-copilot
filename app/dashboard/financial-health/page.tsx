import PageHeader from "@/components/financial-health/header/PageHeader";

import ExecutiveSummary from "@/components/financial-health/hero/ExecutiveSummary";
import HealthScoreHero from "@/components/financial-health/hero/HealthScoreHero";
import KPIGrid from "@/components/financial-health/hero/KPIGrid";

import RevenueBreakdown from "@/components/financial-health/revenue/RevenueBreakdown";
import RevenueGrowth from "@/components/financial-health/revenue/RevenueGrowth";

import ExpenseAnalysis from "@/components/financial-health/expense/ExpenseAnalysis";
import AICostOptimization from "@/components/financial-health/expense/AICostOptimization";

import LiquidityForecast from "@/components/financial-health/forecast/LiquidityForecast";
import IndustryBenchmark from "@/components/financial-health/benchmark/IndustryBenchmark";
import StrategicRecommendations from "@/components/financial-health/recommendations/StrategicRecommendations";

import ExportActions from "@/components/financial-health/common/ExportActions";

export default function FinancialHealthPage() {
  return (
    <div className="space-y-10">

      <PageHeader />

      <ExecutiveSummary />

      {/* Hero */}

      <section className="grid grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-4">
          <HealthScoreHero />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <KPIGrid />
        </div>

      </section>

      {/* Revenue */}

      <section className="space-y-6">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Revenue Breakdown
        </h2>

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-12 lg:col-span-4">
            <RevenueBreakdown />
          </div>

          <div className="col-span-12 lg:col-span-8">
            <RevenueGrowth />
          </div>

        </div>

      </section>

      {/* Expense */}

      <section className="space-y-6">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Expense Analysis
        </h2>

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-12 lg:col-span-7">
            <ExpenseAnalysis />
          </div>

          <div className="col-span-12 lg:col-span-5">
            <AICostOptimization />
          </div>

        </div>

      </section>

      {/* Forecast */}

      <section className="grid grid-cols-12 gap-6">

        <div className="col-span-12 lg:col-span-8">
          <LiquidityForecast />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <IndustryBenchmark />
        </div>

      </section>

      {/* AI + Export */}

      <section className="grid grid-cols-12 gap-6">

        <div className="col-span-12 lg:col-span-8">
          <StrategicRecommendations />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <ExportActions />
        </div>

      </section>

    </div>
  );
}