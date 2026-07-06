"use client";

const suggestions = [
  "Analyze Financial Health",
  "Improve Loan Eligibility",
  "Generate Financial Report",
  "Find Government Schemes",
  "Reduce Business Expenses",
];

export default function SuggestionChips() {
  return (
    <div className="flex flex-wrap gap-3">

      {suggestions.map((item) => (
        <button
          key={item}
          className="
            rounded-full
            border
            border-slate-600
            bg-slate-900
            px-5
            py-3
            text-sm
            font-medium
            text-slate-200
            transition-all
            duration-300
            hover:border-emerald-500
            hover:bg-emerald-500/10
            hover:text-emerald-400
          "
        >
          {item}
        </button>
      ))}

    </div>
  );
}