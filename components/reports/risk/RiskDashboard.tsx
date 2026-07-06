import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const risks = [
  {
    title: "Financial Risk",
    value: "Low",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-500/15",
  },
  {
    title: "Compliance",
    value: "Excellent",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-500/15",
  },
  {
    title: "Market Risk",
    value: "Medium",
    icon: AlertTriangle,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-500/15",
  },
  {
    title: "Credit Risk",
    value: "Low",
    icon: ShieldAlert,
    color: "text-violet-600",
    bg: "bg-violet-100 dark:bg-violet-500/15",
  },
];

export default function RiskDashboard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        AI Risk Dashboard
      </h2>

      <div className="space-y-5">

        {risks.map((risk) => {
          const Icon = risk.icon;

          return (
            <div
              key={risk.title}
              className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800"
            >
              <div className="flex items-center gap-4">

                <div className={`rounded-2xl p-3 ${risk.bg}`}>
                  <Icon
                    size={22}
                    className={risk.color}
                  />
                </div>

                <div className="flex-1">

                  <p className="text-sm text-slate-500">
                    {risk.title}
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {risk.value}
                  </h3>

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}