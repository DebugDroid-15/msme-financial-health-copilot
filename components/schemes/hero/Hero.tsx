import { Landmark, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-10 text-white shadow-xl">

      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">

            <Sparkles size={18} />

            AI Powered Recommendation Engine

          </div>

          <h1 className="text-5xl font-bold leading-tight">

            Government Scheme Intelligence

          </h1>

          <p className="mt-6 max-w-3xl text-lg text-emerald-50">

            Our AI analyzes your MSME profile, GST records,
            financial health, turnover and business category
            to recommend the most suitable Central and State
            Government schemes.

          </p>

        </div>

        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/15">

          <Landmark size={64} />

        </div>

      </div>

    </section>
  );
}