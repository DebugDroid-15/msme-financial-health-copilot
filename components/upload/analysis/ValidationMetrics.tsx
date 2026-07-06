const metrics = [
  ["Document Quality", 96],
  ["OCR Accuracy", 98],
  ["GST Consistency", 100],
  ["Bank Match", 97],
  ["Balance Sheet Match", 95],
];

export default function ValidationMetrics() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
        AI Validation Metrics
      </h2>

      <div className="space-y-6">

        {metrics.map(([title, value]) => (

          <div key={title}>

            <div className="mb-2 flex justify-between">

              <span className="text-slate-600 dark:text-slate-300">
                {title}
              </span>

              <span className="font-semibold">
                {value}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

              <div
                className="h-full rounded-full bg-emerald-500"
                style={{
                  width: `${value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}