import {
  FileText,
  ShieldCheck,
  RefreshCcw,
  AlertTriangle,
} from "lucide-react";

const stats = [
  {
    title: "Total Documents",
    value: "24",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-500/15",
  },
  {
    title: "AI Verification",
    value: "98%",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-500/15",
  },
  {
    title: "Processing",
    value: "2",
    icon: RefreshCcw,
    color: "text-violet-600",
    bg: "bg-violet-100 dark:bg-violet-500/15",
  },
  {
    title: "Pending Review",
    value: "1",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-500/15",
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

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.bg}`}
              >
                <Icon
                  className={card.color}
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