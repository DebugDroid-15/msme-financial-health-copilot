import {
  Download,
  FileSpreadsheet,
  FileText,
  Printer,
  Share2,
} from "lucide-react";

const actions = [
  {
    title: "Export PDF",
    icon: FileText,
    color: "bg-red-500",
  },
  {
    title: "Export Excel",
    icon: FileSpreadsheet,
    color: "bg-emerald-500",
  },
  {
    title: "Print Report",
    icon: Printer,
    color: "bg-blue-500",
  },
  {
    title: "Share",
    icon: Share2,
    color: "bg-violet-500",
  },
];

export default function ExportActions() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Export & Share
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Download or share your financial report.
          </p>

        </div>

        <Download className="text-slate-400" />

      </div>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
            >

              <div
                className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center mx-auto`}
              >
                <Icon className="text-white" size={20} />
              </div>

              <p className="mt-4 font-semibold text-slate-900 dark:text-white">
                {item.title}
              </p>

            </button>

          );

        })}

      </div>

    </div>
  );
}