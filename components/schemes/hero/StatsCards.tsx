import {
  Brain,
  ShieldCheck,
  BadgeIndianRupee,
  Trophy,
} from "lucide-react";

const stats = [
  {
    title: "AI Confidence",
    value: "97%",
    icon: Brain,
    color: "text-violet-600",
    bg: "bg-violet-100 dark:bg-violet-500/15",
  },
  {
    title: "Eligible Schemes",
    value: "12",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-500/15",
  },
  {
    title: "Potential Funding",
    value: "₹48L",
    icon: BadgeIndianRupee,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-500/15",
  },
  {
    title: "Approval Chance",
    value: "91%",
    icon: Trophy,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-500/15",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#111827]"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h2>

              </div>

              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}>

                <Icon
                  className={item.color}
                  size={26}
                />

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}