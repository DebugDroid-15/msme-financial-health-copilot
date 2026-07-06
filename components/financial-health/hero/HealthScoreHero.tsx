import { TrendingUp } from "lucide-react";

export default function HealthScoreHero() {
  return (
    <div className="rounded-3xl border bg-white dark:bg-[#1E293B] dark:border-slate-700 p-8 shadow-sm dark:shadow-xl">

      <h2 className="text-xl font-semibold text-center text-slate-900 dark:text-white">
        Health Score
      </h2>

      <div className="mt-8 flex justify-center">

        <div className="relative h-44 w-44">

          <svg
            viewBox="0 0 120 120"
            className="h-full w-full -rotate-90"
          >

            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="#E2E8F0"
              strokeWidth="10"
              fill="none"
            />

            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="#10B981"
              strokeWidth="10"
              fill="none"
              strokeDasharray="327"
              strokeDashoffset="42"
              strokeLinecap="round"
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
              87
            </h2>

            <span className="text-slate-500">
              /100
            </span>

          </div>

        </div>

      </div>

      <div className="mt-6 flex justify-center">

        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">

          <TrendingUp size={16} />

          +2.4% vs last month

        </span>

      </div>

      <p className="mt-5 text-center text-slate-500 dark:text-slate-400">

        Excellent · Top 15% in Industry

      </p>

    </div>
  );
}