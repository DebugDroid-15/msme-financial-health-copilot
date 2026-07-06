import {
  CheckCircle2,
  Circle,
  FileWarning,
} from "lucide-react";

const documents = [
  { name: "GST Returns", complete: true },
  { name: "Bank Statements", complete: true },
  { name: "ITR", complete: true },
  { name: "Udyam Certificate", complete: true },
  { name: "Project Report", complete: false },
  { name: "Quotation", complete: false },
];

export default function DocumentReadiness() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Document Readiness
          </h2>

          <p className="mt-2 text-slate-500">
            Required documents for maximum eligibility
          </p>

        </div>

        <FileWarning className="text-orange-500" size={28} />

      </div>

      <div className="mb-8">

        <div className="mb-3 flex justify-between">

          <span>Overall Completion</span>

          <span className="font-bold text-emerald-600">
            82%
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700">

          <div
            className="h-full rounded-full bg-emerald-500"
            style={{ width: "82%" }}
          />

        </div>

      </div>

      <div className="space-y-4">

        {documents.map((doc) => (

          <div
            key={doc.name}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-800"
          >

            <div className="flex items-center gap-3">

              {doc.complete ? (
                <CheckCircle2
                  size={18}
                  className="text-emerald-500"
                />
              ) : (
                <Circle
                  size={18}
                  className="text-orange-500"
                />
              )}

              <span>{doc.name}</span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}