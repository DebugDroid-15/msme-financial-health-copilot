"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which documents can I upload?",
    answer:
      "You can upload GST returns, bank statements, financial statements and other supported business documents.",
  },
  {
    question: "How is the Financial Health Score calculated?",
    answer:
      "The score is generated using AI analysis of uploaded financial data, business metrics and document insights.",
  },
  {
    question: "Can AI recommend Government Schemes?",
    answer:
      "Yes. Based on your business profile, MSME category and financial information, the platform suggests suitable schemes.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. Documents are processed securely and intended to be handled with appropriate data protection practices.",
  },
  {
    question: "Can I export reports?",
    answer:
      "Yes. Executive reports and business summaries can be generated and downloaded for sharing with stakeholders.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-slate-50 py-24 dark:bg-[#111827]"
    >

      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-xl text-slate-500">
            Everything you need to know about MSME Copilot.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-[#0B1220]"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >

                <span className="text-xl font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (
                <div className="border-t border-slate-200 px-8 py-6 dark:border-slate-700">

                  <p className="leading-8 text-slate-500">
                    {faq.answer}
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}