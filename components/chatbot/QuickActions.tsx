"use client";

import {
  ArrowRight,
  FileText,
  Landmark,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const actions = [
  {
    title: "Generate Financial Report",
    icon: FileText,
  },
  {
    title: "Find Government Schemes",
    icon: Landmark,
  },
  {
    title: "Improve Loan Eligibility",
    icon: ShieldCheck,
  },
  {
    title: "GST Analysis",
    icon: Receipt,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        Recommended Actions
      </h2>

      <div className="space-y-3">

        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="group flex w-full items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 px-4 py-4 transition hover:border-emerald-500 hover:bg-slate-700"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-emerald-500/10 p-3">
                  <Icon
                    size={20}
                    className="text-emerald-400"
                  />
                </div>

                <span className="font-medium text-white">
                  {item.title}
                </span>

              </div>

              <ArrowRight
                size={18}
                className="text-slate-500 transition group-hover:text-emerald-400"
              />

            </button>
          );
        })}

      </div>

    </div>
  );
}