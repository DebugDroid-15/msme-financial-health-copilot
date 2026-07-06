import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 p-12 text-white shadow-2xl">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2">

                <Sparkles size={18} />

                Ready to Begin?

              </div>

              <h2 className="max-w-3xl text-5xl font-black leading-tight">

                Transform Your MSME
                <br />

                with AI Financial Intelligence

              </h2>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-emerald-50">

                Upload your documents, understand your financial
                health, discover government schemes and generate
                executive reports — all from one intelligent
                platform.

              </p>

            </div>

            <div className="flex flex-col gap-4">

              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-700 transition hover:bg-slate-100"
              >

                Launch Dashboard

                <ArrowRight size={20} />

              </Link>

              <a
                href="#features"
                className="rounded-2xl border border-white/40 px-8 py-4 text-center text-lg font-semibold transition hover:bg-white/10"
              >
                Explore Features
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}