import { AlertTriangle, CheckCircle2, Clock3, ArrowRight } from "lucide-react";

const tasks = [
  {
    title: "GST Return Due",
    description: "File GST return within 3 days.",
    priority: "High",
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-500/10",
    icon: AlertTriangle,
  },
  {
    title: "Cash Flow Healthy",
    description: "Positive trend compared to last month.",
    priority: "Good",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    icon: CheckCircle2,
  },
  {
    title: "Loan Review",
    description: "Eligibility increased by 6%.",
    priority: "Medium",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    icon: Clock3,
  },
];

export default function PriorityCenter() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            AI Priority Center
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Recommended actions for your business
          </p>

        </div>

      </div>

      <div className="mt-6 space-y-4">

        {tasks.map((task) => {

          const Icon = task.icon;

          return (

            <div
              key={task.title}
              className={`rounded-2xl p-4 flex items-start justify-between ${task.bg}`}
            >

              <div className="flex gap-4">

                <div className="mt-1">

                  <Icon
                    className={task.color}
                    size={22}
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {task.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {task.description}
                  </p>

                </div>

              </div>

              <button className="rounded-full p-2 hover:bg-white/50 dark:hover:bg-slate-700 transition">
                <ArrowRight size={18} />
              </button>

            </div>

          );

        })}

      </div>

    </div>
  );
}