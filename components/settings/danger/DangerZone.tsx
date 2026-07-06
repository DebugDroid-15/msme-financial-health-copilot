import {
  AlertTriangle,
  Trash2,
} from "lucide-react";

export default function DangerZone() {
  return (
    <section className="rounded-3xl border border-red-300 bg-red-50 p-8 shadow-sm dark:border-red-900 dark:bg-red-950/20">

      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div className="flex gap-5">

          <div className="mt-1">

            <AlertTriangle
              size={36}
              className="text-red-600"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-red-700 dark:text-red-400">

              Danger Zone

            </h2>

            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">

              Deactivating your account permanently removes
              all uploaded documents, AI reports, financial
              analysis and business information.

              This action cannot be undone.

            </p>

          </div>

        </div>

        <button className="flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700">

          <Trash2 size={20} />

          Deactivate Account

        </button>

      </div>

    </section>
  );
}