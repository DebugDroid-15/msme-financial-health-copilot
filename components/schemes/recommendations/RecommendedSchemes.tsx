import {
  ArrowRight,
  BadgeIndianRupee,
  Clock3,
  Landmark,
} from "lucide-react";

const schemes = [
  {
    name: "CGTMSE",
    funding: "₹2 Cr",
    time: "7 Days",
    match: "98%",
  },
  {
    name: "PMEGP",
    funding: "₹50 L",
    time: "12 Days",
    match: "94%",
  },
  {
    name: "Stand-Up India",
    funding: "₹1 Cr",
    time: "15 Days",
    match: "91%",
  },
  {
    name: "CLCSS",
    funding: "₹25 L",
    time: "10 Days",
    match: "90%",
  },
];

export default function RecommendedSchemes() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
        Recommended Schemes
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {schemes.map((scheme) => (

          <div
            key={scheme.name}
            className="rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg dark:border-slate-700"
          >

            <div className="mb-5 flex items-center justify-between">

              <div className="rounded-2xl bg-emerald-100 p-3 dark:bg-emerald-500/15">

                <Landmark
                  size={24}
                  className="text-emerald-600"
                />

              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                {scheme.match}
              </span>

            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {scheme.name}
            </h3>

            <div className="mt-5 space-y-3 text-sm">

              <div className="flex items-center gap-3">

                <BadgeIndianRupee size={18} />

                {scheme.funding}

              </div>

              <div className="flex items-center gap-3">

                <Clock3 size={18} />

                {scheme.time}

              </div>

            </div>

            <button className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold">

              Explore Scheme

              <ArrowRight size={18} />

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}