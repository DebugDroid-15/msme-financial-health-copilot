const heatmap = [
  ["Financial", "Low"],
  ["Compliance", "Low"],
  ["Operations", "Medium"],
  ["Liquidity", "Low"],
  ["Growth", "High"],
  ["Competition", "Medium"],
];

export default function RiskHeatmap() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        Risk Heatmap
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {heatmap.map(([title, risk]) => (

          <div
            key={title}
            className="rounded-2xl bg-slate-50 p-5 text-center dark:bg-slate-800"
          >

            <p className="text-sm text-slate-500">
              {title}
            </p>

            <h3
              className={`mt-3 text-xl font-bold
              ${
                risk === "Low"
                  ? "text-emerald-600"
                  : risk === "Medium"
                  ? "text-orange-500"
                  : "text-red-500"
              }`}
            >
              {risk}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}