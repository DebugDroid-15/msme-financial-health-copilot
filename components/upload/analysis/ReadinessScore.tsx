import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const items = [
  ["GST Documents", "100%", true],
  ["PAN", "100%", true],
  ["Aadhaar", "100%", true],
  ["Bank Statements", "Pending", false],
] as const;

export default function ReadinessScore() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Readiness Score
      </h2>

      <div className="mb-8 flex justify-center">

        <div className="flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-emerald-500">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-emerald-500">
              94%
            </h1>

            <p className="text-sm text-slate-500">
              Complete
            </p>

          </div>

        </div>

      </div>

      <div className="space-y-4">

        {items.map(([title, value, done]) => (

          <div
            key={title}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              {done ? (
                <CheckCircle2
                  size={18}
                  className="text-emerald-500"
                />
              ) : (
                <Circle
                  size={18}
                  className="text-slate-400"
                />
              )}

              <span className="text-slate-700 dark:text-slate-300">
                {title}
              </span>

            </div>

            <span className="font-semibold">
              {value}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}