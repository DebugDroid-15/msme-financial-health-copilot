import { BadgeCheck } from "lucide-react";

export default function LoanEligibility() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500 dark:text-slate-400">
            Loan Eligibility
          </p>

          <h2 className="text-5xl font-bold mt-4 text-emerald-600">
            92%
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            High chance of approval based on current financial health.
          </p>

        </div>

        <BadgeCheck
          size={60}
          className="text-emerald-500"
        />

      </div>

      <button className="mt-8 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-white font-semibold">
        View Loan Report
      </button>

    </div>
  );
}