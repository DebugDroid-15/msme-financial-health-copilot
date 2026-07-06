import {
  Bell,
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Unread",
    value: "18",
    icon: Bell,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-500/15",
  },
  {
    title: "High Priority",
    value: "5",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-500/15",
  },
  {
    title: "Today's Alerts",
    value: "9",
    icon: CalendarDays,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-500/15",
  },
  {
    title: "Resolved",
    value: "74",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-500/15",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#111827]"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
                  {card.value}
                </h2>

              </div>

              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.bg}`}>

                <Icon
                  size={26}
                  className={card.color}
                />

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}