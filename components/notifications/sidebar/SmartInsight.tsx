import {
  Brain,
  TrendingUp,
  TriangleAlert,
  Sparkles,
} from "lucide-react";

export default function SmartInsight() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-8 text-white shadow-xl">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-white/20 p-3">

          <Brain size={28} />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            AI Smart Insight
          </h2>

          <p className="text-violet-100">
            Priority Recommendation
          </p>

        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <div className="flex items-center gap-3">

            <TrendingUp size={22} />

            <h3 className="font-semibold">
              Funding Readiness Increased
            </h3>

          </div>

          <p className="mt-3 text-violet-100">

            Your latest GST filing improved your funding
            readiness score from 88% to 91%.

          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <div className="flex items-center gap-3">

            <TriangleAlert size={22} />

            <h3 className="font-semibold">
              Immediate Action
            </h3>

          </div>

          <p className="mt-3 text-violet-100">

            Apply for CGTMSE within the next 10 days for the
            highest approval probability.

          </p>

        </div>

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-semibold text-violet-700 transition hover:bg-slate-100">

        <Sparkles size={18} />

        View AI Recommendation

      </button>

    </section>
  );
}