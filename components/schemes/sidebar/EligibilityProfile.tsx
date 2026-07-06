import {
  BadgeCheck,
  Building2,
  CircleCheckBig,
  FileBadge,
} from "lucide-react";

const items = [
  {
    title: "Business Type",
    value: "Manufacturing",
    icon: Building2,
  },
  {
    title: "GST Compliance",
    value: "Excellent",
    icon: CircleCheckBig,
  },
  {
    title: "MSME Registration",
    value: "Verified",
    icon: BadgeCheck,
  },
  {
    title: "Credit Profile",
    value: "Good",
    icon: FileBadge,
  },
];

export default function EligibilityProfile() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
        Eligibility Profile
      </h2>

      <div className="mb-8 flex justify-center">

        <div className="flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-emerald-500">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-emerald-500">
              96%
            </h1>

            <p className="text-sm text-slate-500">
              Eligible
            </p>

          </div>

        </div>

      </div>

      <div className="space-y-5">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"
            >

              <div className="rounded-xl bg-emerald-100 p-3 dark:bg-emerald-500/15">

                <Icon
                  className="text-emerald-600"
                  size={20}
                />

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {item.value}
                </h3>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}