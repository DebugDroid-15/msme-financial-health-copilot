import { Trophy } from "lucide-react";

const metrics = [
  {
    name: "Profit Margin",
    yours: "18%",
    industry: "14%",
  },
  {
    name: "Liquidity Ratio",
    yours: "2.1",
    industry: "1.6",
  },
  {
    name: "Debt Ratio",
    yours: "28%",
    industry: "35%",
  },
  {
    name: "Growth Rate",
    yours: "12%",
    industry: "8%",
  },
];

export default function IndustryBenchmark() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center gap-3 mb-6">

        <Trophy className="text-amber-500" />

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Industry Benchmark
        </h2>

      </div>

      <div className="space-y-5">

        {metrics.map((metric) => (

          <div
            key={metric.name}
            className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-3"
          >

            <span className="text-slate-600 dark:text-slate-300">
              {metric.name}
            </span>

            <div className="text-right">

              <div className="font-semibold text-emerald-600">
                {metric.yours}
              </div>

              <div className="text-xs text-slate-500">
                Avg: {metric.industry}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}