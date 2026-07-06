import {
  CloudUpload,
  FolderOpen,
} from "lucide-react";

export default function UploadZone() {
  return (
    <section className="rounded-3xl border-2 border-dashed border-emerald-300 bg-white p-12 text-center shadow-sm dark:border-emerald-700 dark:bg-[#111827]">

      <div className="mx-auto max-w-2xl">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/15">

          <CloudUpload
            size={42}
            className="text-emerald-600"
          />

        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">

          Upload Business Documents

        </h2>

        <p className="mt-4 text-slate-500">

          Drag & Drop GST, ITR, Bank Statements,
          Balance Sheet, PAN, Aadhaar or other MSME documents.

        </p>

        <div className="mt-8 flex justify-center gap-4">

          <button className="rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-500">

            Upload Files

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800">

            <FolderOpen size={18} />

            Browse Files

          </button>

        </div>

      </div>

    </section>
  );
}