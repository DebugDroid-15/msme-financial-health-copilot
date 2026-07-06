import MetricsCard from "./MetricsCard";
import QuickActions from "./QuickActions";

export default function RightPanel() {
  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-[#111827]">

      <div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Live Analysis
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Financial snapshot
        </p>

      </div>

      <MetricsCard />

      <QuickActions />

    </div>
  );
}