import {
  Brain,
  TrendingUp,
} from "lucide-react";

const reasons = [
  ["GST Compliance", 98],
  ["Financial Health", 94],
  ["Business Stability", 96],
  ["Cash Flow", 92],
  ["Credit Profile", 90],
  ["Loan Readiness", 95],
];

export default function WhyRecommended() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-2xl bg-emerald-100 p-4 dark:bg-emerald-500/15">

          <Brain
            className="text-emerald-600"
            size={28}
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Why AI Recommended These Schemes
          </h2>

          <p className="mt-2 text-slate-500">
            Recommendation confidence based on your business profile
          </p>

        </div>

      </div>

      <div className="space-y-6">

        {reasons.map(([title, score]) => (

          <div key={title}>

            <div className="mb-2 flex justify-between">

              <span>{title}</span>

              <span className="font-bold">
                {score}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700">

              <div
                className="h-full rounded-full bg-emerald-500"
                style={{
                  width: `${score}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-500/10">

        <div className="flex items-center gap-3">

          <TrendingUp
            className="text-emerald-600"
            size={22}
          />

          <p className="font-medium text-slate-800 dark:text-slate-200">
            Your MSME profile is among the top 10% of applicants for
            government-backed funding schemes.
          </p>

        </div>

      </div>

    </section>
  );
}