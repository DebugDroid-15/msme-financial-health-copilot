const categories = [
  {
    title: "Product Sales",
    value: "₹10.1L",
    percent: 55,
    color: "bg-blue-600",
  },
  {
    title: "Service Fees",
    value: "₹5.5L",
    percent: 30,
    color: "bg-emerald-500",
  },
  {
    title: "Subscriptions",
    value: "₹2.8L",
    percent: 15,
    color: "bg-violet-500",
  },
];

export default function RevenueBreakdown() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
        Revenue by Category
      </h2>

      <div className="space-y-7">

        {categories.map((item) => (

          <div key={item.title}>

            <div className="flex justify-between mb-2">

              <span className="font-medium text-slate-700 dark:text-slate-300">
                {item.title}
              </span>

              <span className="font-semibold text-slate-900 dark:text-white">
                {item.value} ({item.percent}%)
              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700">

              <div
                className={`${item.color} h-3 rounded-full transition-all duration-700`}
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