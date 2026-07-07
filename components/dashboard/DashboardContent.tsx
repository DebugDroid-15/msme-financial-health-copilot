import HealthScoreCard from "@/components/dashboard/cards/HealthScoreCard";
import KPICards from "@/components/dashboard/cards/KPICards";

import RevenueExpenseChart from "@/components/dashboard/charts/RevenueExpenseChart";

import PriorityCenter from "@/components/dashboard/panels/PriorityCenter";
import AIInsights from "@/components/dashboard/panels/AIInsights";
import LoanEligibility from "@/components/dashboard/panels/LoanEligibility";
import RecentDocuments from "@/components/dashboard/panels/RecentDocuments";

export default function DashboardContent() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-end justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Welcome back, Rajesh!
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Your financial command center is ready.
          </p>

        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] px-5 py-3 shadow-sm">
          <span className="text-slate-700 dark:text-slate-200">
            Oct 26, 2024
          </span>
        </div>

      </div>

      {/* Top Row */}

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-4">

          <HealthScoreCard />

        </div>

        <div className="col-span-12 xl:col-span-8">

          <KPICards />

        </div>

      </div>

      {/* Middle Row */}

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-8">

          <RevenueExpenseChart />

        </div>

        <div className="col-span-12 xl:col-span-4">

          <PriorityCenter />

        </div>

      </div>

      {/* Bottom Row */}

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 lg:col-span-4">

          <LoanEligibility />

        </div>

        <div className="col-span-12 lg:col-span-4">

          <AIInsights />

        </div>

        <div className="col-span-12 lg:col-span-4">

          <RecentDocuments />

        </div>

      </div>

    </div>
  );
}