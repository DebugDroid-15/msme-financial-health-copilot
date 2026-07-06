import {
  ArrowUpRight,
  Brain,
  CircleCheckBig,
  TrendingUp,
} from "lucide-react";

const predictions = [
  {
    scheme: "CGTMSE",
    match: "98%",
    chance: "Very High",
    color: "bg-emerald-500",
  },
  {
    scheme: "PMEGP",
    match: "94%",
    chance: "High",
    color: "bg-blue-500",
  },
  {
    scheme: "CLCSS",
    match: "90%",
    chance: "High",
    color: "bg-violet-500",
  },
];

export default function SuccessPredictor() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            AI Scheme Success Predictor
          </h2>

          <p className="mt-2 text-slate-500">
            Ranked recommendations based on your MSME profile
          </p>

        </div>

        <div className="rounded-2xl bg-emerald-100 p-4 dark:bg-emerald-500/15">
          <Brain className="text-emerald-600" size={28} />
        </div>

      </div>

      <div className="space-y-5">

        {predictions.map((item) => (

          <div
            key={item.scheme}
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-500 dark:border-slate-700"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.scheme}
                </h3>

                <div className="mt-3 flex items-center gap-3">

                  <CircleCheckBig
                    size={18}
                    className="text-emerald-500"
                  />

                  <span>{item.chance} Approval Probability</span>

                </div>

              </div>

              <div className="text-right">

                <h2 className="text-4xl font-bold text-emerald-600">
                  {item.match}
                </h2>

                <p className="text-sm text-slate-500">
                  Match Score
                </p>

              </div>

            </div>

            <div className="mt-5 h-3 rounded-full bg-slate-200 dark:bg-slate-700">

              <div
                className={`h-full rounded-full ${item.color}`}
                style={{
                  width: item.match,
                }}
              />

            </div>

          </div>

        ))}

      </div>

      <button className="mt-8 flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500">

        <TrendingUp size={18} />

        View Complete Prediction

        <ArrowUpRight size={18} />

      </button>

    </section>
  );
}