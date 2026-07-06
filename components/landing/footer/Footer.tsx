import Link from "next/link";
import {
  Globe,
  Mail,
  Briefcase,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold">
                M
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  MSME Copilot
                </h2>

                <p className="text-slate-400">
                  Financial Health AI
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              AI-powered financial intelligence platform
              helping MSMEs understand financial health,
              discover government schemes, receive AI
              recommendations and generate executive reports.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700">
                <Globe size={20} />
              </button>

              <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700">
                <Briefcase size={20} />
              </button>

              <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700">
                <Mail size={20} />
              </button>

            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-6 text-lg font-bold">
              Product
            </h3>

            <div className="flex flex-col gap-4 text-slate-400">

              <Link href="/dashboard">
                Dashboard
              </Link>

              <Link href="/dashboard/financial-health">
                Financial Health
              </Link>

              <Link href="/dashboard/chatbot">
                AI Copilot
              </Link>

              <Link href="/dashboard/reports">
                Reports
              </Link>

            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-6 text-lg font-bold">
              Resources
            </h3>

            <div className="flex flex-col gap-4 text-slate-400">

              <Link href="/dashboard/upload">
                Document Upload
              </Link>

              <Link href="/dashboard/schemes">
                Government Schemes
              </Link>

              <Link href="/dashboard/notifications">
                Notifications
              </Link>

              <a href="#faq">
                FAQ
              </a>

            </div>
          </div>

          {/* Platform */}

          <div>
            <h3 className="mb-6 text-lg font-bold">
              Platform
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>AI Powered</p>

              <p>Secure Processing</p>

              <p>Executive Reports</p>

              <p>Funding Readiness</p>

            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-slate-400">
            © 2026 MSME Financial Health Copilot. All rights reserved.
          </p>

          <div className="rounded-full bg-emerald-600/20 px-5 py-2 text-sm font-semibold text-emerald-300">
            Built for IDBI Innovate 2026
          </div>

        </div>
      </div>
    </footer>
  );
}