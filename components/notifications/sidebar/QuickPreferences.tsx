"use client";

import { useState } from "react";
import {
  Bell,
  Brain,
  FileText,
  Landmark,
} from "lucide-react";

export default function QuickPreferences() {
  const [notifications, setNotifications] = useState({
    ai: true,
    schemes: true,
    documents: true,
    reminders: false,
  });

  const Toggle = ({
    label,
    icon: Icon,
    value,
    onChange,
  }: any) => (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">

      <div className="flex items-center gap-3">

        <Icon
          size={20}
          className="text-emerald-600"
        />

        <span>{label}</span>

      </div>

      <button
        onClick={onChange}
        className={`relative h-7 w-14 rounded-full transition ${
          value
            ? "bg-emerald-500"
            : "bg-slate-300"
        }`}
      >

        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            value
              ? "left-8"
              : "left-1"
          }`}
        />

      </button>

    </div>
  );

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center gap-3">

        <Bell
          className="text-emerald-600"
          size={26}
        />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Quick Preferences
        </h2>

      </div>

      <div className="space-y-4">

        <Toggle
          label="AI Insights"
          icon={Brain}
          value={notifications.ai}
          onChange={() =>
            setNotifications({
              ...notifications,
              ai: !notifications.ai,
            })
          }
        />

        <Toggle
          label="Government Schemes"
          icon={Landmark}
          value={notifications.schemes}
          onChange={() =>
            setNotifications({
              ...notifications,
              schemes: !notifications.schemes,
            })
          }
        />

        <Toggle
          label="Document Updates"
          icon={FileText}
          value={notifications.documents}
          onChange={() =>
            setNotifications({
              ...notifications,
              documents: !notifications.documents,
            })
          }
        />

        <Toggle
          label="Reminder Alerts"
          icon={Bell}
          value={notifications.reminders}
          onChange={() =>
            setNotifications({
              ...notifications,
              reminders: !notifications.reminders,
            })
          }
        />

      </div>

    </section>
  );
}