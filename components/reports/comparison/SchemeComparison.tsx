const schemes = [
  {
    name: "CGTMSE",
    funding: "₹2 Cr",
    subsidy: "85%",
    processing: "7 Days",
    score: "98%",
  },
  {
    name: "PMEGP",
    funding: "₹50 L",
    subsidy: "35%",
    processing: "12 Days",
    score: "94%",
  },
  {
    name: "Stand-Up India",
    funding: "₹1 Cr",
    subsidy: "—",
    processing: "15 Days",
    score: "91%",
  },
  {
    name: "CLCSS",
    funding: "₹25 L",
    subsidy: "15%",
    processing: "10 Days",
    score: "90%",
  },
];

export default function SchemeComparison() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="border-b border-slate-200 px-8 py-6 dark:border-slate-700">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Government Scheme Comparison
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100 dark:bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left">Scheme</th>
              <th className="px-6 py-4 text-left">Funding</th>
              <th className="px-6 py-4 text-left">Subsidy</th>
              <th className="px-6 py-4 text-left">Processing</th>
              <th className="px-6 py-4 text-left">AI Score</th>

            </tr>

          </thead>

          <tbody>

            {schemes.map((scheme) => (

              <tr
                key={scheme.name}
                className="border-t border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >

                <td className="px-6 py-5 font-semibold">
                  {scheme.name}
                </td>

                <td className="px-6 py-5">
                  {scheme.funding}
                </td>

                <td className="px-6 py-5">
                  {scheme.subsidy}
                </td>

                <td className="px-6 py-5">
                  {scheme.processing}
                </td>

                <td className="px-6 py-5">

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">

                    {scheme.score}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}