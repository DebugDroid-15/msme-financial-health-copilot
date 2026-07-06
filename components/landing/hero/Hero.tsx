import {
  ArrowRight,
  Bot,
  FileBarChart,
  Landmark,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">

            <Sparkles size={18} />

            Built for MSMEs

          </div>

          <h1 className="text-6xl font-black leading-tight text-slate-900 dark:text-white">

            AI Financial
            <br />

            Health Copilot

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600 dark:text-slate-300">

            Upload GST, Bank Statements and Financial
            Documents.

            Our AI evaluates financial health,
            recommends government schemes,
            predicts funding readiness,
            and generates executive reports in minutes.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-500"
            >
              Launch Dashboard

              <ArrowRight size={20} />
            </Link>

            <a
              href="#features"
              className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Explore Features
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-6">

            <div>

              <h2 className="text-4xl font-bold text-emerald-600">
                95%
              </h2>

              <p className="text-slate-500">
                AI Accuracy
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-blue-600">
                2 Min
              </h2>

              <p className="text-slate-500">
                Analysis Time
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-violet-600">
                10+
              </h2>

              <p className="text-slate-500">
                Govt Schemes
              </p>

            </div>

          </div>

        </div>

        <div className="grid gap-6">

          <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white shadow-2xl">

            <h2 className="text-lg">
              Financial Health Score
            </h2>

            <h1 className="mt-4 text-7xl font-black">
              91
            </h1>

            <p className="mt-3 text-emerald-100">
              Excellent Business Health
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#111827]">

              <Bot className="mb-4 text-violet-600" />

              <h3 className="font-bold">
                AI Copilot
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Ask financial questions instantly.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#111827]">

              <Landmark className="mb-4 text-emerald-600" />

              <h3 className="font-bold">
                Scheme Match
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Personalized government schemes.
              </p>

            </div>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#111827]">

            <FileBarChart className="mb-4 text-blue-600" />

            <h3 className="font-bold">
              Executive Reports
            </h3>

            <p className="mt-2 text-slate-500">

              Download professional AI-generated business reports
              within seconds.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}