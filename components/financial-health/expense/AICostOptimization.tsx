import {
  Sparkles,
  ArrowRight,
  TrendingDown,
} from "lucide-react";

const suggestions = [
  {
    title: "Reduce Utility Costs",
    saving: "₹24,000 / month",
  },
  {
    title: "Optimize Inventory",
    saving: "₹42,000 / month",
  },
  {
    title: "Improve Vendor Contracts",
    saving: "₹18,000 / month",
  },
];

export default function AICostOptimization() {
  return (
    <div className="rounded-3xl border border-emerald-200 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center gap-3 mb-6">

        <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center">

          <Sparkles
            className="text-white"
            size={22}
          />

        </div>

        <div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            AI Cost Optimization
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Potential monthly savings identified
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {suggestions.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-emerald-600">

                  <TrendingDown size={16} />

                  <span className="font-medium">
                    Save {item.saving}
                  </span>

                </div>

              </div>

              <ArrowRight
                className="text-slate-400"
                size={18}
              />

            </div>

          </div>

        ))}

      </div>

      <button className="mt-6 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-white font-semibold transition">
        View Detailed Recommendations
      </button>

    </div>
  );
}