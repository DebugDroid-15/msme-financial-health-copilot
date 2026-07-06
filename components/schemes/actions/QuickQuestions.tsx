const questions = [
  "Which scheme has the highest subsidy?",
  "Why was CGTMSE recommended?",
  "How can I improve my eligibility?",
  "Compare PMEGP and CGTMSE",
  "Show only Central Government schemes",
  "What documents are still missing?",
];

export default function QuickQuestions() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        AI Quick Questions
      </h2>

      <div className="flex flex-wrap gap-3">

        {questions.map((question) => (

          <button
            key={question}
            className="rounded-full border border-slate-300 px-5 py-3 text-sm transition hover:border-emerald-500 hover:bg-emerald-50 dark:border-slate-600 dark:hover:bg-emerald-500/10"
          >
            {question}
          </button>

        ))}

      </div>

    </section>
  );
}