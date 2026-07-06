"use client";

import {
  Activity,
  TrendingUp,
  Wallet,
  ShieldCheck,
} from "lucide-react";

const metrics = [
  {
    title: "Financial Health",
    value: "87",
    subtitle: "Overall Score",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: Activity,
  },
  {
    title: "Loan Readiness",
    value: "92%",
    subtitle: "Eligible",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    icon: ShieldCheck,
  },
  {
    title: "Cash Flow",
    value: "+12%",
    subtitle: "Healthy",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    icon: Wallet,
  },
  {
    title: "Growth",
    value: "+18%",
    subtitle: "This Month",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    icon: TrendingUp,
  },
];

export default function MetricsCard() {
  return (
    <div className="space-y-5">
      {metrics.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-700 bg-slate-800 p-5 transition hover:border-emerald-500"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <h2 className={`mt-3 text-4xl font-bold ${item.color}`}>
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {item.subtitle}
                </p>

              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon
                  size={26}
                  className={item.color}
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}