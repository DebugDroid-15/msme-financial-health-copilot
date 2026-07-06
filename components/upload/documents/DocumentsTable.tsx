import {
  FileText,
  MoreVertical,
} from "lucide-react";

const documents = [
  {
    name: "GST Return Q4.pdf",
    category: "GST",
    date: "24 Oct 2026",
    status: "Verified",
    verification: "Passed",
    confidence: "100%",
  },
  {
    name: "Bank Statement.pdf",
    category: "Finance",
    date: "24 Oct 2026",
    status: "Processing",
    verification: "Running",
    confidence: "96%",
  },
  {
    name: "Income Tax Return.pdf",
    category: "Tax",
    date: "23 Oct 2026",
    status: "Verified",
    verification: "Passed",
    confidence: "99%",
  },
  {
    name: "PAN Card.pdf",
    category: "KYC",
    date: "23 Oct 2026",
    status: "Review",
    verification: "Flagged",
    confidence: "78%",
  },
];

export default function DocumentsTable() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6 dark:border-slate-700">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Recent Documents
        </h2>

        <button className="font-semibold text-emerald-600">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100 dark:bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left">Document</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Uploaded</th>
              <th className="px-6 py-4 text-left">AI Status</th>
              <th className="px-6 py-4 text-left">Verification</th>
              <th className="px-6 py-4 text-left">Confidence</th>
              <th className="px-6 py-4"></th>

            </tr>

          </thead>

          <tbody>

            {documents.map((doc) => (

              <tr
                key={doc.name}
                className="border-t border-slate-200 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-500/15">

                      <FileText
                        size={18}
                        className="text-blue-600"
                      />

                    </div>

                    <span className="font-medium text-slate-900 dark:text-white">
                      {doc.name}
                    </span>

                  </div>

                </td>

                <td className="px-6 py-5">
                  {doc.category}
                </td>

                <td className="px-6 py-5">
                  {doc.date}
                </td>

                <td className="px-6 py-5">

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">

                    {doc.status}

                  </span>

                </td>

                <td className="px-6 py-5">
                  {doc.verification}
                </td>

                <td className="px-6 py-5 font-bold">
                  {doc.confidence}
                </td>

                <td className="px-6 py-5">

                  <button>

                    <MoreVertical size={18} />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}