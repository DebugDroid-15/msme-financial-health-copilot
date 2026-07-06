import { Bot, Sparkles } from "lucide-react";

const insights = [
  "Revenue increased by 18% compared to last month.",
  "Operating expenses are within the recommended range.",
  "Cash flow remains stable for the next 60 days.",
  "Eligible for a higher working capital loan.",
];

export default function AIInsights() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">

          <Bot className="text-emerald-600 dark:text-emerald-300" />

        </div>

        <div>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            AI Insights
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Smart recommendations generated from your data.
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {insights.map((item) => (

          <div
            key={item}
            className="flex gap-3 rounded-xl bg-slate-50 dark:bg-slate-800 p-4"
          >

            <Sparkles
              size={18}
              className="text-emerald-500 mt-1"
            />

            <p className="text-sm text-slate-700 dark:text-slate-300">
              {item}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}