"use client";

import { Bell, Bot, Search, BriefcaseBusiness } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md transition-all duration-300">

      <div className="h-full flex items-center justify-between px-8">

        {/* Left */}

        <div className="relative w-[430px]">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search insights, reports, documents..."
            className="
              w-full
              rounded-full
              border
              border-slate-300
              dark:border-slate-700
              bg-slate-100
              dark:bg-[#1E293B]
              py-2.5
              pl-11
              pr-4
              text-sm
              text-slate-800
              dark:text-white
              placeholder:text-slate-400
              outline-none
              transition-all
              focus:border-emerald-500
              focus:ring-2
              focus:ring-emerald-500/20
            "
          />

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <button
            className="
              h-10
              w-10
              rounded-full
              border
              border-slate-200
              dark:border-slate-700
              bg-white
              dark:bg-[#1E293B]
              flex
              items-center
              justify-center
              hover:bg-slate-100
              dark:hover:bg-slate-800
              transition
            "
          >
            <Bot
              size={18}
              className="text-slate-600 dark:text-slate-300"
            />
          </button>

          <button
            className="
              relative
              h-10
              w-10
              rounded-full
              border
              border-slate-200
              dark:border-slate-700
              bg-white
              dark:bg-[#1E293B]
              flex
              items-center
              justify-center
              hover:bg-slate-100
              dark:hover:bg-slate-800
              transition
            "
          >
            <Bell
              size={18}
              className="text-slate-600 dark:text-slate-300"
            />

            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <div className="ml-2 flex items-center gap-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] px-3 py-1.5 shadow-sm">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="hidden lg:block">

              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Rajesh Kumar
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                MSME Owner
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}