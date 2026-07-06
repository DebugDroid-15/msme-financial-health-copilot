import {
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function RecommendationBanner() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white shadow-lg">

      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">

            <Sparkles size={18} />

            AI Executive Recommendation

          </div>

          <h2 className="text-4xl font-bold">

            Business is Ready for Growth

          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">

            AI analysis indicates excellent financial stability,
            strong GST compliance and high funding readiness.
            Applying for government-backed financing is strongly
            recommended.

          </p>

        </div>

        <button className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-emerald-700">

          View Executive Summary

          <ArrowRight size={20} />

        </button>

      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl bg-white/10 p-5">

          <TrendingUp size={28} />

          <h3 className="mt-3 text-3xl font-bold">
            91%
          </h3>

          <p className="mt-2 text-emerald-50">
            Funding Readiness
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-5">

          <TrendingUp size={28} />

          <h3 className="mt-3 text-3xl font-bold">
            ₹48L
          </h3>

          <p className="mt-2 text-emerald-50">
            Estimated Funding
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-5">

          <TrendingUp size={28} />

          <h3 className="mt-3 text-3xl font-bold">
            LOW
          </h3>

          <p className="mt-2 text-emerald-50">
            Overall Risk
          </p>

        </div>

      </div>

    </section>
  );
}