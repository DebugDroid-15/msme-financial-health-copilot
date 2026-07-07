"use client";

import { useEffect, useState } from "react";

import {
  DashboardResponse,
  getDashboard,
} from "@/lib/api/dashboard";

import HealthScoreCard from "@/components/dashboard/cards/HealthScoreCard";
import KPICards from "@/components/dashboard/cards/KPICards";
import RevenueExpenseChart from "@/components/dashboard/charts/RevenueExpenseChart";

import PriorityCenter from "@/components/dashboard/panels/PriorityCenter";
import AIInsights from "@/components/dashboard/panels/AIInsights";
import LoanEligibility from "@/components/dashboard/panels/LoanEligibility";
import RecentDocuments from "@/components/dashboard/panels/RecentDocuments";

export default function DashboardContent() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboard();

        setDashboard(data);
      } catch (err) {
        console.error(err);

        setError("Unable to load dashboard.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  if (!dashboard || error) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-red-600">
          {error || "Dashboard unavailable"}
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="flex items-end justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Welcome back, {dashboard.business.owner_name}!
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {dashboard.business.business_name}
          </p>

        </div>

        <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-[#1E293B]">

          <span className="text-slate-700 dark:text-slate-200">

            {new Date().toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}

          </span>

        </div>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-4">

          <HealthScoreCard
            score={dashboard.financial.overall_score}
            risk={dashboard.financial.risk}
          />

        </div>

        <div className="col-span-12 xl:col-span-8">

          <KPICards dashboard={dashboard} />

        </div>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-8">

          <RevenueExpenseChart
            analytics={dashboard.analytics}
          />

        </div>

        <div className="col-span-12 xl:col-span-4">

          <PriorityCenter
            priorities={dashboard.priorities}
          />

        </div>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 lg:col-span-4">

          <LoanEligibility
            loan={dashboard.loan}
          />

        </div>

        <div className="col-span-12 lg:col-span-4">

          <AIInsights
            insights={dashboard.insights}
          />

        </div>

        <div className="col-span-12 lg:col-span-4">

          <RecentDocuments
            documents={dashboard.recent_documents}
          />

        </div>

      </div>

    </div>
  );
}