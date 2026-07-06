import {
  FileBarChart,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-xl">

      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

            <Sparkles size={18} />

            AI Executive Business Report

          </div>

          <h1 className="text-5xl font-bold leading-tight">

            MSME Executive Intelligence Report

          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">

            A comprehensive AI-generated report summarizing
            your business financial health, funding readiness,
            government scheme opportunities, risks, forecasts,
            and strategic recommendations.

          </p>

        </div>

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">

          <FileBarChart size={72} />

        </div>

      </div>

    </section>
  );
}