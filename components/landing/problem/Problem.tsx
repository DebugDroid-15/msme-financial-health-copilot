import {
  AlertTriangle,
  Clock3,
  FileSearch,
  Landmark,
} from "lucide-react";

const problems = [
  {
    title: "Scattered Financial Documents",
    icon: FileSearch,
    color: "text-blue-600",
  },
  {
    title: "Difficult Government Schemes",
    icon: Landmark,
    color: "text-emerald-600",
  },
  {
    title: "Slow Loan Preparation",
    icon: Clock3,
    color: "text-orange-500",
  },
  {
    title: "No Financial Visibility",
    icon: AlertTriangle,
    color: "text-red-500",
  },
];

export default function Problem() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-[#111827]">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">

            Challenges Faced by MSMEs

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-500">

            Small businesses spend valuable time managing
            documents, understanding finances and identifying
            suitable government support.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 dark:bg-[#0B1220]"
              >

                <Icon
                  size={42}
                  className={item.color}
                />

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-500">

                  Traditional financial workflows consume time
                  and often delay informed business decisions.

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}