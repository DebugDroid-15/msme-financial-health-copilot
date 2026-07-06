"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [
  { month: "Jul", cash: 4.5 },
  { month: "Aug", cash: 5.1 },
  { month: "Sep", cash: 5.8 },
  { month: "Oct", cash: 6.3 },
  { month: "Nov", cash: 7.0 },
  { month: "Dec", cash: 7.8 },
];

export default function LiquidityForecast() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="mb-6">

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Liquidity Forecast
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Predicted cash availability over the next six months.
        </p>

      </div>

      <div className="h-[280px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="cash"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.25}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}