import {
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

export default function ExecutiveVerdict() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-10 text-white shadow-xl">

      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">

            <BadgeCheck size={18} />

            Final AI Verdict

          </div>

          <h2 className="text-4xl font-bold">

            Funding Ready

          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">

            Based on financial performance, GST compliance,
            document verification and AI analysis, your MSME
            is well positioned to secure government-supported
            funding with a high probability of approval.

          </p>

        </div>

        <div className="text-center">

          <TrendingUp size={70} />

          <h1 className="mt-5 text-6xl font-bold">
            91%
          </h1>

          <p className="mt-2">
            Approval Confidence
          </p>

        </div>

      </div>

    </section>
  );
}