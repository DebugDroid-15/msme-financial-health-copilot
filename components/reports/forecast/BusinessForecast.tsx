import {
  ArrowUp,
  TrendingUp,
} from "lucide-react";

const forecast = [
  {
    title: "Revenue",
    current: "₹18 L",
    future: "₹26 L",
  },
  {
    title: "Profit",
    current: "₹3.2 L",
    future: "₹5.1 L",
  },
  {
    title: "Working Capital",
    current: "₹5.4 L",
    future: "₹11 L",
  },
  {
    title: "Employees",
    current: "12",
    future: "18",
  },
];

export default function BusinessForecast() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-500/15">

          <TrendingUp
            size={28}
            className="text-blue-600"
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            AI Business Forecast
          </h2>

          <p className="mt-2 text-slate-500">
            Estimated growth after funding
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {forecast.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700"
          >

            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <div className="mt-4 flex items-center gap-4">

              <span className="text-xl font-bold">
                {item.current}
              </span>

              <ArrowUp
                className="text-emerald-500"
                size={20}
              />

              <span className="text-3xl font-bold text-emerald-600">
                {item.future}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}