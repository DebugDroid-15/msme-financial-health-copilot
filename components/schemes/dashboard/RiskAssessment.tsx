const risks = [
  ["Financial Risk", "Low", "bg-emerald-500"],
  ["Compliance Risk", "Low", "bg-emerald-500"],
  ["Cash Flow Risk", "Medium", "bg-yellow-500"],
  ["Market Risk", "Low", "bg-emerald-500"],
];

export default function RiskAssessment() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        AI Risk Assessment
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {risks.map(([title, value, color]) => (

          <div
            key={title}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700"
          >

            <div className={`mb-4 h-3 rounded-full ${color}`} />

            <p className="text-sm text-slate-500">
              {title}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              {value}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}