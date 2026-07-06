import { RefreshCcw } from "lucide-react";

export default function PageHeader() {
  return (
    <div className="flex items-end justify-between">

      <div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Financial Health Analysis
        </h1>

        <div className="mt-3 flex items-center gap-2 text-slate-500 dark:text-slate-400">

          <RefreshCcw size={15} />

          <span>Last updated 2 minutes ago</span>

        </div>

      </div>

    </div>
  );
}