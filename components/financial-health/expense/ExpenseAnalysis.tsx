const expenses = [
  {
    title: "Operations",
    amount: "₹4.1L",
    percent: 40,
    color: "bg-red-500",
  },
  {
    title: "Payroll",
    amount: "₹3.2L",
    percent: 31,
    color: "bg-amber-500",
  },
  {
    title: "Marketing",
    amount: "₹1.8L",
    percent: 18,
    color: "bg-blue-500",
  },
  {
    title: "Utilities",
    amount: "₹1.1L",
    percent: 11,
    color: "bg-emerald-500",
  },
];

export default function ExpenseAnalysis() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
        Expense Analysis
      </h2>

      <div className="space-y-6">

        {expenses.map((item) => (

          <div key={item.title}>

            <div className="flex justify-between mb-2">

              <span className="font-medium text-slate-700 dark:text-slate-300">
                {item.title}
              </span>

              <span className="font-semibold text-slate-900 dark:text-white">
                {item.amount}
              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700">

              <div
                className={`${item.color} h-3 rounded-full`}
                style={{
                  width: `${item.percent}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}