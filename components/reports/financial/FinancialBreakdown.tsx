const metrics = [
  ["Revenue Stability", 94],
  ["Profitability", 88],
  ["Cash Flow", 91],
  ["GST Compliance", 99],
  ["Business Growth", 90],
  ["Loan Readiness", 87],
];

export default function FinancialBreakdown() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        Financial Health Breakdown
      </h2>

      <div className="space-y-6">

        {metrics.map(([title, score]) => (

          <div key={title}>

            <div className="mb-2 flex justify-between">

              <span>{title}</span>

              <span className="font-bold">
                {score}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700">

              <div
                className="h-full rounded-full bg-emerald-500"
                style={{
                  width: `${score}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}