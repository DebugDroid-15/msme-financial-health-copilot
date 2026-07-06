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

const data = [
  { month: "Jan", revenue: 12, expense: 9 },
  { month: "Feb", revenue: 15, expense: 10 },
  { month: "Mar", revenue: 18, expense: 12 },
  { month: "Apr", revenue: 22, expense: 14 },
  { month: "May", revenue: 20, expense: 15 },
  { month: "Jun", revenue: 25, expense: 17 },
];

export default function RevenueExpenseChart() {
  return (
    <Card className="rounded-3xl border bg-white dark:bg-[#1E293B] dark:border-slate-700 p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Revenue vs Expenses
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last 6 Months
          </p>

        </div>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

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