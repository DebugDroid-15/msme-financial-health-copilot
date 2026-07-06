import {
  Crown,
  Sparkles,
} from "lucide-react";

export default function SubscriptionCard() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-emerald-900 p-8 text-white shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

            <Crown size={18} />

            Enterprise Plan

          </div>

          <h2 className="text-3xl font-bold">
            Premium Subscription
          </h2>

          <p className="mt-2 text-slate-300">
            Renewal: 15 October 2026
          </p>

        </div>

        <Sparkles
          size={42}
          className="text-yellow-300"
        />

      </div>

      <div className="mt-8 space-y-6">

        <div>

          <div className="mb-2 flex justify-between">

            <span>AI Credits</span>

            <span>8,450 / 10,000</span>

          </div>

          <div className="h-3 rounded-full bg-white/20">

            <div
              className="h-full rounded-full bg-emerald-400"
              style={{ width: "84%" }}
            />

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Cloud Storage</span>

            <span>42 GB / 100 GB</span>

          </div>

          <div className="h-3 rounded-full bg-white/20">

            <div
              className="h-full rounded-full bg-cyan-400"
              style={{ width: "42%" }}
            />

          </div>

        </div>

      </div>

      <button className="mt-8 w-full rounded-xl bg-white py-3 font-semibold text-slate-900 transition hover:bg-slate-100">

        Manage Billing

      </button>

    </section>
  );
}