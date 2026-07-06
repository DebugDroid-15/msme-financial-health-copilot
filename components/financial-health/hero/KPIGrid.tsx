import {
  Wallet,
  Receipt,
  TrendingUp,
  Droplets,
  BriefcaseBusiness,
  BadgeCheck,
  ArrowUpRight,
  Minus,
} from "lucide-react";

const kpis = [
  {
    title: "Total Revenue",
    value: "₹18.4L",
    change: "+8%",
    positive: true,
    icon: Wallet,
    iconBg: "bg-blue-100 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-300",
  },
  {
    title: "Total Expenses",
    value: "₹10.2L",
    change: "+2%",
    positive: false,
    icon: Receipt,
    iconBg: "bg-red-100 dark:bg-red-500/15",
    iconColor: "text-red-600 dark:text-red-300",
  },
  {
    title: "Net Profit",
    value: "₹8.2L",
    change: "+14%",
    positive: true,
    icon: TrendingUp,
    iconBg: "bg-emerald-100 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-300",
  },
  {
    title: "Cash Flow",
    value: "+12%",
    change: "+5%",
    positive: true,
    icon: Droplets,
    iconBg: "bg-cyan-100 dark:bg-cyan-500/15",
    iconColor: "text-cyan-600 dark:text-cyan-300",
  },
  {
    title: "Working Capital",
    value: "₹5.4L",
    change: "0%",
    positive: null,
    icon: BriefcaseBusiness,
    iconBg: "bg-violet-100 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-300",
  },
  {
    title: "Loan Readiness",
    value: "92%",
    change: "HIGH",
    positive: true,
    icon: BadgeCheck,
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
    featured: true,
  },
];

export default function KPIGrid() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">

      {kpis.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className={`
              rounded-3xl
              border
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              ${
                item.featured
                  ? "bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-[#1E293B]"
                  : "bg-white dark:bg-[#1E293B]"
              }
              border-slate-200
              dark:border-slate-700
            `}
          >

            <div className="flex items-start justify-between">

              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconBg}`}
              >
                <Icon
                  size={22}
                  className={item.iconColor}
                />
              </div>

              <div>

                {item.positive === true && (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 px-2 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                    <ArrowUpRight size={14} />
                    {item.change}
                  </span>
                )}

                {item.positive === false && (
                  <span className="flex items-center gap-1 rounded-full bg-red-100 dark:bg-red-500/15 px-2 py-1 text-xs font-semibold text-red-600 dark:text-red-300">
                    <ArrowUpRight
                      size={14}
                      className="rotate-90"
                    />
                    {item.change}
                  </span>
                )}

                {item.positive === null && (
                  <span className="flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold">
                    <Minus size={14} />
                    {item.change}
                  </span>
                )}

              </div>

            </div>

            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              {item.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
              {item.value}
            </h3>

          </div>

        );

      })}

    </div>
  );
}