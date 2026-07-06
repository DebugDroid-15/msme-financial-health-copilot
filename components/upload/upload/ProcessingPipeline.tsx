import {
  Upload,
  ScanText,
  Database,
 ShieldCheck,
  Brain,
  Flag,
} from "lucide-react";

const steps = [
  {
    title: "Upload",
    icon: Upload,
    active: true,
  },
  {
    title: "OCR",
    icon: ScanText,
    active: true,
  },
  {
    title: "Extraction",
    icon: Database,
    active: true,
  },
  {
    title: "Validation",
    icon: ShieldCheck,
    active: true,
  },
  {
    title: "AI Engine",
    icon: Brain,
    active: false,
  },
  {
    title: "Ready",
    icon: Flag,
    active: false,
  },
];

export default function ProcessingPipeline() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
        AI Processing Pipeline
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">

        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="flex flex-col items-center"
            >

              <div
                className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full

                ${
                  step.active
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                }`}
              >

                <Icon size={28} />

              </div>

              <p className="text-center font-medium text-slate-700 dark:text-slate-300">
                {step.title}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}