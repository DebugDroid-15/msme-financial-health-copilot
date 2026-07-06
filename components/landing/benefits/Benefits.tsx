import {
  BadgeCheck,
  Brain,
  Clock3,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "AI Decision Support",
    color: "text-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Financial Visibility",
    color: "text-emerald-600",
  },
  {
    icon: Landmark,
    title: "Government Scheme Discovery",
    color: "text-orange-500",
  },
  {
    icon: Clock3,
    title: "Save Hours of Manual Work",
    color: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure Document Processing",
    color: "text-red-500",
  },
  {
    icon: BadgeCheck,
    title: "Executive Ready Reports",
    color: "text-cyan-600",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
            Why Choose MSME Copilot?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-500">
            Designed specifically for Indian MSMEs with AI-powered
            financial analysis and government scheme intelligence.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-[#111827]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">

                  <Icon
                    size={32}
                    className={item.color}
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  Intelligent automation helps MSMEs make
                  faster and better financial decisions.
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}