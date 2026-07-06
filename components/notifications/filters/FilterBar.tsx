"use client";

import { useState } from "react";
import {
  Bell,
  Brain,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const filters = [
  {
    label: "All",
    icon: Bell,
  },
  {
    label: "AI Insights",
    icon: Brain,
  },
  {
    label: "Documents",
    icon: FileText,
  },
  {
    label: "Schemes",
    icon: Landmark,
  },
  {
    label: "Security",
    icon: ShieldCheck,
  },
];

export default function FilterBar() {
  const [active, setActive] = useState("All");

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="flex flex-wrap gap-4">

        {filters.map((item) => {
          const Icon = item.icon;

          const selected = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition

              ${
                selected
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              <Icon size={18} />

              {item.label}
            </button>
          );
        })}

      </div>

    </section>
  );
}