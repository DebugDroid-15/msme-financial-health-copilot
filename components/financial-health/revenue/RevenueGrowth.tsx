"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 14.2 },
  { month: "Feb", revenue: 15.1 },
  { month: "Mar", revenue: 16.8 },
  { month: "Apr", revenue: 18.4 },
  { month: "May", revenue: 19.5 },
];

export default function RevenueGrowth() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
        Month-over-Month Growth
      </h2>

      <div className="h-[280px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="month" />

            <Tooltip />

            <Bar
              dataKey="revenue"
              fill="#10B981"
              radius={[10,10,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}