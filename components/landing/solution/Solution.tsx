import {
  Brain,
  FileSearch,
  FileBarChart,
  Landmark,
  Bot,
  ShieldCheck,
} from "lucide-react";

const solutions = [
  {
    title: "AI Document Analysis",
    icon: FileSearch,
    color: "text-blue-600",
  },
  {
    title: "Financial Health Scoring",
    icon: Brain,
    color: "text-violet-600",
  },
  {
    title: "Government Scheme Matching",
    icon: Landmark,
    color: "text-emerald-600",
  },
  {
    title: "Executive Reports",
    icon: FileBarChart,
    color: "text-cyan-600",
  },
  {
    title: "AI Financial Copilot",
    icon: Bot,
    color: "text-orange-500",
  },
  {
    title: "Secure Data Processing",
    icon: ShieldCheck,
    color: "text-red-500",
  },
];

export default function Solution() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            Our Solution
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            One Platform.
            <br />
            Complete Financial Intelligence.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-500">
            MSME Copilot combines AI, financial analytics,
            document intelligence and government scheme
            recommendations into one intelligent platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-[#111827]"
              >

                <Icon
                  size={44}
                  className={item.color}
                />

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-500">
                  AI-powered workflows automate financial
                  analysis and deliver actionable business
                  insights within minutes.
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}