import {
  FileSpreadsheet,
  FileText,
} from "lucide-react";

import { RecentDocument } from "@/lib/api/dashboard";

interface Props {
  documents: RecentDocument[];
}

export default function RecentDocuments({
  documents,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] p-6 shadow-sm dark:shadow-xl">

      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
        Recent Documents
      </h2>

      <div className="mt-6 space-y-4">

        {documents.map((doc) => {

          const Icon =
            doc.type.toLowerCase().includes("sheet")
              ? FileSpreadsheet
              : FileText;

          return (

            <div
              key={doc.name}
              className="flex items-center gap-4 rounded-xl bg-slate-50 dark:bg-slate-800 p-4"
            >

              <Icon className="text-blue-500" />

              <div>

                <p className="font-medium text-slate-900 dark:text-white">
                  {doc.name}
                </p>

                <p className="text-sm text-slate-500">
                  {doc.status}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}