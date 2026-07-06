import {
  Archive,
  ChevronRight,
} from "lucide-react";

export default function HistoryButton() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">

        <Archive
          className="text-emerald-600"
          size={34}
        />

      </div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Notification History
      </h2>

      <p className="mt-3 text-slate-500 dark:text-slate-400">

        Browse previously received notifications,
        archived alerts and AI recommendations.

      </p>

      <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500">

        View Complete History

        <ChevronRight size={18} />

      </button>

    </section>
  );
}