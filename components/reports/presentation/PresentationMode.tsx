import {
  MonitorPlay,
  Presentation,
  Share2,
} from "lucide-react";

export default function PresentationMode() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="flex flex-col items-center text-center">

        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/15">

          <Presentation
            className="text-emerald-600"
            size={42}
          />

        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Executive Presentation Mode
        </h2>

        <p className="mt-4 max-w-2xl text-slate-500">

          Present this AI-generated executive report directly
          to banks, investors, mentors or government agencies.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500">

            <MonitorPlay size={18} />

            Start Presentation

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold dark:border-slate-600">

            <Share2 size={18} />

            Share Report

          </button>

        </div>

      </div>

    </section>
  );
}