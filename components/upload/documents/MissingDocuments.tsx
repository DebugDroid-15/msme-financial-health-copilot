import {
  AlertTriangle,
  Sparkles,
  Upload,
} from "lucide-react";

export default function MissingDocuments() {
  return (
    <section className="rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/20">

      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div className="flex gap-5">

          <div className="mt-1">

            <AlertTriangle
              size={34}
              className="text-red-500"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">

              Missing Documents

            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">

              Upload the remaining documents to unlock
              complete AI financial analysis.

            </p>

            <ul className="mt-5 space-y-2 font-medium">

              <li>• Project Report</li>
              <li>• Machinery Quotations</li>
              <li>• Loan Purpose Letter</li>

            </ul>

          </div>

        </div>

        <div className="flex flex-wrap gap-4">

          <button className="flex items-center gap-2 rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50 dark:hover:bg-emerald-500/10">

            <Sparkles size={18} />

            Generate using AI

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500">

            <Upload size={18} />

            Upload Now

          </button>

        </div>

      </div>

    </section>
  );
}