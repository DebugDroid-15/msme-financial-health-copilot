"use client";

import { useState } from "react";
import {
  ShieldCheck,
  KeyRound,
  Smartphone,
  Monitor,
  ChevronRight,
} from "lucide-react";

export default function SecurityCard() {
  const [enabled, setEnabled] = useState(true);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-2xl bg-emerald-100 p-4 dark:bg-emerald-500/15">

          <ShieldCheck
            size={28}
            className="text-emerald-600"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Security
          </h2>

          <p className="text-slate-500">
            Protect your account and business data
          </p>

        </div>

      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

          <div className="flex items-center gap-4">

            <KeyRound
              size={22}
              className="text-blue-600"
            />

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Password
              </h3>

              <p className="text-sm text-slate-500">
                Updated 2 months ago
              </p>

            </div>

          </div>

          <ChevronRight
            size={20}
            className="text-slate-400"
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

          <div className="flex items-center gap-4">

            <Smartphone
              size={22}
              className="text-emerald-600"
            />

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Two-Factor Authentication
              </h3>

              <p className="text-sm text-slate-500">
                Recommended for better security
              </p>

            </div>

          </div>

          <button
            onClick={() => setEnabled(!enabled)}
            className={`relative h-7 w-14 rounded-full transition ${
              enabled
                ? "bg-emerald-500"
                : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                enabled
                  ? "left-8"
                  : "left-1"
              }`}
            />
          </button>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

          <div className="flex items-center gap-4">

            <Monitor
              size={22}
              className="text-violet-600"
            />

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Active Sessions
              </h3>

              <p className="text-sm text-slate-500">
                3 Logged-in Devices
              </p>

            </div>

          </div>

          <button className="rounded-lg border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-500/10">

            Manage

          </button>

        </div>

      </div>

    </section>
  );
}