import {
  ArrowUp,
  BadgeIndianRupee,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    title: "Current Revenue",
    current: "₹18 L",
    projected: "₹28 L",
  },
  {
    title: "Working Capital",
    current: "₹5 L",
    projected: "₹12 L",
  },
  {
    title: "Employment",
    current: "12",
    projected: "18",
  },
];

export default function ImpactSimulator() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-500/15">
          <TrendingUp className="text-blue-600" size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Business Impact Simulator
          </h2>

          <p className="mt-2 text-slate-500">
            Estimated improvements after funding
          </p>
        </div>

      </div>

      <div className="space-y-5">

        {metrics.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <div className="mt-3 flex items-center gap-4">

                  <span className="font-bold">
                    {item.current}
                  </span>

                  <ArrowUp className="text-emerald-500" size={18} />

                  <span className="text-xl font-bold text-emerald-600">
                    {item.projected}
                  </span>

                </div>

              </div>

              <BadgeIndianRupee
                className="text-blue-600"
                size={24}
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}