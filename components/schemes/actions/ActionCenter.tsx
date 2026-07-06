import { ArrowRight, Sparkles } from "lucide-react";

export default function ActionCenter() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white shadow-lg">

      <Sparkles size={36} />

      <h2 className="mt-6 text-3xl font-bold">
        AI Action Center
      </h2>

      <p className="mt-4 text-emerald-50">
        Your profile is ready for scheme application.
        AI recommends applying for CGTMSE immediately.
      </p>

      <button className="mt-8 flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700">

        Start Application

        <ArrowRight size={18} />

      </button>

    </section>
  );
}