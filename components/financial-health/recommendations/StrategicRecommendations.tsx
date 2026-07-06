import { Sparkles, CheckCircle2 } from "lucide-react";

const recommendations = [
  "Reduce operational expenses by 5% over the next quarter.",
  "Increase digital marketing investment to accelerate revenue growth.",
  "Maintain current liquidity reserve for at least six months.",
  "Eligible to apply for higher-value MSME credit facilities.",
];

export default function StrategicRecommendations() {
  return (
    <div className="rounded-3xl border border-emerald-200 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center gap-3 mb-6">

        <Sparkles className="text-emerald-600" />

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          AI Strategic Recommendations
        </h2>

      </div>

      <div className="space-y-4">

        {recommendations.map((item) => (

          <div
            key={item}
            className="flex gap-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4"
          >

            <CheckCircle2 className="text-emerald-500 mt-0.5" size={18} />

            <p className="text-sm text-slate-700 dark:text-slate-300">
              {item}
            </p>

          </div>

        ))}

      </div>

      <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-500">
        Generate Full AI Report
      </button>

    </div>
  );
}