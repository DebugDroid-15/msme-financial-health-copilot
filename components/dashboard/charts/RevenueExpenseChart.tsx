"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import { Card } from "@/components/ui/card";

import { DashboardAnalytics } from "@/lib/api/dashboard";

interface Props {
  analytics: DashboardAnalytics;
}

export default function RevenueExpenseChart({
  analytics,
}: Props) {

  const chartData = analytics.months.map(
    (month, index) => ({
      month,
      revenue:
        analytics.revenue[index] / 100000,
      expense:
        analytics.expenses[index] / 100000,
    })
  );

  return (
    <Card className="rounded-3xl border bg-white dark:bg-[#1E293B] dark:border-slate-700 p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Revenue vs Expenses
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last 12 Months
          </p>

        </div>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={chartData}>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={4}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#EF4444"
              strokeWidth={4}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
}