import {
  ArrowDown,
  Brain,
  FileUp,
  FileBarChart,
  Landmark,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    title: "Upload Documents",
    icon: FileUp,
    color: "text-blue-600",
  },
  {
    title: "AI Analysis",
    icon: Brain,
    color: "text-violet-600",
  },
  {
    title: "Financial Health",
    icon: BadgeCheck,
    color: "text-emerald-600",
  },
  {
    title: "Scheme Matching",
    icon: Landmark,
    color: "text-orange-500",
  },
  {
    title: "Executive Report",
    icon: FileBarChart,
    color: "text-cyan-600",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
            How It Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-500">
            Five simple steps from document upload to
            AI-powered financial recommendations.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative text-center"
              >

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 shadow-lg dark:bg-[#111827]">

                  <Icon
                    size={38}
                    className={step.color}
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                {index !== steps.length - 1 && (
                  <ArrowDown
                    className="mx-auto mt-8 hidden text-slate-400 md:block"
                    size={28}
                  />
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}