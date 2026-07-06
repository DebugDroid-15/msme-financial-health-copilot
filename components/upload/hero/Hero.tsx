import {
  BrainCircuit,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

      <div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">

          <BrainCircuit size={18} />

          AI Powered Document Intelligence

        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

          Document Intelligence Center

        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-500 dark:text-slate-400">

          Upload GST returns, bank statements, ITRs, balance sheets
          and business documents. Our AI extracts financial insights,
          validates information and prepares your MSME profile
          automatically.

        </p>

      </div>

    </section>
  );
}