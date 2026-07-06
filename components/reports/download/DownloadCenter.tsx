import {
  Download,
  FileBarChart,
  FileSpreadsheet,
  FileText,
  Presentation,
} from "lucide-react";

const downloads = [
  {
    title: "Executive Report",
    format: "PDF",
    icon: FileText,
  },
  {
    title: "Financial Analysis",
    format: "PDF",
    icon: FileBarChart,
  },
  {
    title: "Business Data",
    format: "Excel",
    icon: FileSpreadsheet,
  },
  {
    title: "Presentation Deck",
    format: "PPT",
    icon: Presentation,
  },
];

export default function DownloadCenter() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        Download Center
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {downloads.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-500 hover:shadow-lg dark:border-slate-700"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-500/15">

                <Icon
                  className="text-emerald-600"
                  size={24}
                />

              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-500">
                {item.format}
              </p>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-500">

                <Download size={18} />

                Download

              </button>

            </div>
          );
        })}

      </div>

    </section>
  );
}