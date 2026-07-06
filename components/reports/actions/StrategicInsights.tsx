import {
  Brain,
  Lightbulb,
} from "lucide-react";

const insights = [
  "Increase digital payment adoption to improve transaction credibility.",
  "Maintain monthly GST compliance for stronger funding eligibility.",
  "Expand working capital through government-backed financing.",
  "AI predicts 38% business growth within the next 12 months.",
];

export default function StrategicInsights() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-2xl bg-violet-100 p-4 dark:bg-violet-500/15">

          <Brain
            className="text-violet-600"
            size={28}
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            AI Strategic Insights
          </h2>

          <p className="mt-2 text-slate-500">
            Personalized recommendations for business growth
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {insights.map((tip) => (

          <div
            key={tip}
            className="flex gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800"
          >

            <Lightbulb
              className="mt-1 text-amber-500"
              size={22}
            />

            <p>{tip}</p>

          </div>

        ))}

      </div>

    </section>
  );
}