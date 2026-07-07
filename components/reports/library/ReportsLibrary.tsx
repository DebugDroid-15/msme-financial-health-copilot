import {
  Download,
  Eye,
  FileBarChart,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

const reports = [
  {
    title: "Executive Summary",
    type: "PDF",
    icon: FileText,
  },
  {
    title: "Financial Health Report",
    type: "PDF",
    icon: FileBarChart,
  },
  {
    title: "Government Scheme Report",
    type: "PDF",
    icon: FileText,
  },
  {
    title: "Business Analytics",
    type: "Excel",
    icon: FileSpreadsheet,
  },
];

export default function ReportsLibrary() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Reports Library
        </h2>

        <button className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white">
          Generate All
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {reports.map((report) => {
          const Icon = report.icon;

          return (
            <div
              key={report.title}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-500 hover:shadow-lg dark:border-slate-700"
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  <div className="rounded-2xl bg-emerald-100 p-4 dark:bg-emerald-500/15">

                    <Icon
                      size={24}
                      className="text-emerald-600"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {report.title}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      {report.type} Report
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-8 flex gap-3">

                <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3">

                  <Eye size={18} />

                  Preview

                </button>

                <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white">

                  <Download size={18} />

                  Download

                </button>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}