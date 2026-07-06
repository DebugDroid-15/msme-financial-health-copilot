import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const steps = [
  {
    title: "Document Analysis",
    done: true,
  },
  {
    title: "Financial Verification",
    done: true,
  },
  {
    title: "Government Scheme Matching",
    done: true,
  },
  {
    title: "Funding Recommendation",
    done: true,
  },
  {
    title: "Application Submission",
    done: false,
  },
  {
    title: "Bank Approval",
    done: false,
  },
];

export default function FundingTimeline() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
        Funding Readiness Timeline
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">

        {steps.map((step) => (

          <div
            key={step.title}
            className="text-center"
          >

            <div className="mb-4 flex justify-center">

              {step.done ? (
                <CheckCircle2
                  size={34}
                  className="text-emerald-500"
                />
              ) : (
                <Circle
                  size={34}
                  className="text-slate-400"
                />
              )}

            </div>

            <p className="font-medium text-slate-700 dark:text-slate-300">
              {step.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}