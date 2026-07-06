import {
  Bell,
  CheckCheck,
  Filter,
  Search,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">

            <Bell size={18} />

            Notifications Center

          </div>

          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">

            Stay Updated

          </h1>

          <p className="mt-5 max-w-3xl text-lg text-slate-500 dark:text-slate-400">

            Receive AI insights, government scheme alerts,
            security notifications, financial recommendations
            and document updates in one place.

          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800">

            <Search size={18} />

            Search

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800">

            <Filter size={18} />

            Filter

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500">

            <CheckCheck size={18} />

            Mark All Read

          </button>

        </div>

      </div>

    </section>
  );
}