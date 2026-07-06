import {
  Activity,
  Bell,
  Bot,
  FileBarChart,
  Files,
  Landmark,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Financial Health",
    description: "AI evaluates business performance using financial documents.",
    color: "text-emerald-600",
  },
  {
    icon: Files,
    title: "Document Intelligence",
    description: "Upload GST, Bank Statements and Business Reports.",
    color: "text-blue-600",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description: "Automatically discover matching MSME schemes.",
    color: "text-orange-500",
  },
  {
    icon: Bot,
    title: "AI Copilot",
    description: "Ask financial questions in natural language.",
    color: "text-violet-600",
  },
  {
    icon: FileBarChart,
    title: "Executive Reports",
    description: "Generate investor and bank-ready reports instantly.",
    color: "text-cyan-600",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay updated with AI insights and scheme alerts.",
    color: "text-red-500",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24 dark:bg-[#111827]"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
            Powerful Features
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-500">
            Everything an MSME needs to understand its
            financial position and become funding-ready.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl dark:bg-[#0B1220]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">

                  <Icon
                    size={30}
                    className={feature.color}
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}