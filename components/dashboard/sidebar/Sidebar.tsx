"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Activity,
  Bot,
  FileText,
  Landmark,
  BarChart3,
  Bell,
  Settings,
  UserCircle2,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Financial Health",
    href: "/dashboard/financial-health",
    icon: Activity,
  },
  {
    title: "AI Copilot",
    href: "/dashboard/chatbot",
    icon: Bot,
    badge: "BETA",
  },
  {
    title: "Documents",
    href: "/dashboard/upload",
    icon: FileText,
  },
  {
    title: "Government Schemes",
    href: "/dashboard/schemes",
    icon: Landmark,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
];

const bottomMenu = [
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111827]">

      {/* Logo */}

      <div className="border-b border-slate-200 dark:border-slate-800 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
            M
          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              MSME Copilot
            </h2>

            <p className="text-sm text-slate-500">
              Financial Health Hub
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 space-y-2 overflow-y-auto p-4">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href ||
                pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300

              ${
                active
                  ? "bg-emerald-50 text-emerald-600 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-300"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />

              <span className="flex-1 font-medium">
                {item.title}
              </span>

              {item.badge && (
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-200 dark:border-slate-800 p-4">

        {bottomMenu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300

              ${
                active
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={18} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

        <div className="mt-6 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">

          <div className="flex gap-3">

            <UserCircle2
              size={42}
              className="text-slate-500"
            />

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Rajesh Kumar
              </h3>

              <p className="text-sm text-slate-500">
                MSME Owner
              </p>

            </div>

          </div>

          <button className="mt-4 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-500">
            Get Expert Advice
          </button>

        </div>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}