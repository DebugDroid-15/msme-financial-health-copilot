import { BadgeCheck } from "lucide-react";

import { LoanDetails } from "@/lib/api/dashboard";

interface Props {
  loan: LoanDetails;
}

export default function LoanEligibility({
  loan,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500 dark:text-slate-400">
            Approval Probability
          </p>

          <h2 className="text-5xl font-bold mt-4 text-emerald-600">
            {loan.approval_probability}%
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Recommended Limit: {loan.recommended_limit}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Risk Level: {loan.risk}
          </p>

        </div>

        <BadgeCheck
          size={60}
          className="text-emerald-500"
        />

      </div>

      <button className="mt-8 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-500">

        View Credit Assessment

      </button>

    </div>
  );
}