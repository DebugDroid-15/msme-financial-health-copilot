import {
  BadgeIndianRupee,
  Building2,
  CircleCheckBig,
  Wallet,
} from "lucide-react";

const data = [
  {
    title: "Annual Revenue",
    value: "₹18.4 L",
    icon: BadgeIndianRupee,
    color: "text-emerald-600",
  },
  {
    title: "Net Profit",
    value: "₹3.2 L",
    icon: Wallet,
    color: "text-blue-600",
  },
  {
    title: "Working Capital",
    value: "₹5.4 L",
    icon: BadgeIndianRupee,
    color: "text-violet-600",
  },
  {
    title: "Business Type",
    value: "Manufacturing",
    icon: Building2,
    color: "text-orange-500",
  },
  {
    title: "GST Status",
    value: "Verified",
    icon: CircleCheckBig,
    color: "text-emerald-600",
  },
  {
    title: "Cash Flow",
    value: "Healthy",
    icon: Wallet,
    color: "text-cyan-500",
  },
];

export default function FinancialIntelligence() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
        AI Extracted Financial Intelligence
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {data.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-700">
                <Icon className={item.color} size={22} />
              </div>

              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {item.value}
              </h3>
            </div>
          );
        })}

      </div>

    </section>
  );
}