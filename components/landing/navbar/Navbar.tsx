"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#workflow" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-[#0B1220]/80">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
            M
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              MSME Copilot
            </h2>

            <p className="text-sm text-slate-500">
              Financial Health AI
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300"
            >
              {item.label}
            </a>
          ))}

        </nav>

        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
        >
          Launch Dashboard

          <ArrowRight size={18} />
        </Link>

      </div>

    </header>
  );
}