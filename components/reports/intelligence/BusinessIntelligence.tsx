import {
  Activity,
  BadgeIndianRupee,
  Building2,
  CircleCheckBig,
  Landmark,
  Wallet,
} from "lucide-react";

const intelligence = [
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
    title: "Financial Health",
    value: "91 / 100",
    icon: Activity,
    color: "text-violet-600",
  },
  {
    title: "GST Compliance",
    value: "Excellent",
    icon: CircleCheckBig,
    color: "text-emerald-600",
  },
  {
    title: "Eligible Schemes",
    value: "12",
    icon: Landmark,
    color: "text-orange-500",
  },
  {
    title: "Business Category",
    value: "Manufacturing",
    icon: Building2,
    color: "text-cyan-600",
  },
];

export default function BusinessIntelligence() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        Business Intelligence Summary
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {intelligence.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-slate-700">

                <Icon
                  size={24}
                  className={item.color}
                />

              </div>

              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                {item.value}
              </h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}