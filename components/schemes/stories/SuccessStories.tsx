import { TrendingUp } from "lucide-react";

const stories = [
  {
    company: "ABC Manufacturing",
    funding: "₹50 L",
    growth: "+42%",
  },
  {
    company: "XYZ Foods",
    funding: "₹25 L",
    growth: "+36%",
  },
  {
    company: "TechFab Industries",
    funding: "₹1 Cr",
    growth: "+58%",
  },
];

export default function SuccessStories() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        Similar MSME Success Stories
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {stories.map((story) => (

          <div
            key={story.company}
            className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800"
          >

            <TrendingUp
              className="mb-5 text-emerald-600"
              size={28}
            />

            <h3 className="font-bold text-slate-900 dark:text-white">
              {story.company}
            </h3>

            <p className="mt-4">
              Funding: {story.funding}
            </p>

            <p className="mt-2 font-semibold text-emerald-600">
              Revenue Growth {story.growth}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}