import {
  BadgeIndianRupee,
  Brain,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    title: "Approval Probability",
    value: "91%",
    icon: Brain,
  },
  {
    title: "Maximum Funding",
    value: "₹2 Crore",
    icon: BadgeIndianRupee,
  },
  {
    title: "Processing Time",
    value: "7 Days",
    icon: Clock3,
  },
  {
    title: "Government Guarantee",
    value: "Available",
    icon: ShieldCheck,
  },
];

export default function FundingDashboard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        Funding Success Dashboard
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800"
            >
              <Icon className="mb-5 text-emerald-600" size={30} />

              <p className="text-sm text-slate-500">
                {card.title}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                {card.value}
              </h3>
            </div>
          );
        })}

      </div>

    </section>
  );
}