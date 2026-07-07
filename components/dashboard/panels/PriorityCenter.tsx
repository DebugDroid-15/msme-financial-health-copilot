import {
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

interface Props {
  priorities: string[];
}

export default function PriorityCenter({
  priorities,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#1E293B] dark:shadow-xl">

      <div>

        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          AI Priority Center
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Recommended actions for your business
        </p>

      </div>

      <div className="mt-6 space-y-4">

        {priorities.map((priority) => (

          <div
            key={priority}
            className="flex items-start justify-between rounded-2xl bg-red-50 p-4 dark:bg-red-500/10"
          >

            <div className="flex gap-4">

              <AlertTriangle
                className="mt-1 text-red-500"
                size={22}
              />

              <div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Action Required
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {priority}
                </p>

              </div>

            </div>

            <button className="rounded-full p-2 transition hover:bg-white/50 dark:hover:bg-slate-700">

              <ArrowRight size={18} />

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}