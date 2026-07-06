import {
  CheckCircle2,
} from "lucide-react";

const actions = [
  "Apply for CGTMSE immediately",
  "Upload Project Report",
  "Improve Working Capital",
  "Maintain GST filing consistency",
  "Prepare funding documents",
];

export default function ExecutiveActionPlan() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        Executive Action Plan
      </h2>

      <div className="space-y-5">

        {actions.map((action) => (

          <div
            key={action}
            className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800"
          >

            <CheckCircle2
              className="text-emerald-500"
              size={22}
            />

            <span>{action}</span>

          </div>

        ))}

      </div>

    </section>
  );
}