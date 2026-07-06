import {
  Building2,
  Mail,
  MapPin,
  Phone,
  User,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

const details = [
  {
    label: "Full Name",
    value: "Rajesh Kumar",
    icon: User,
  },
  {
    label: "Email",
    value: "rajesh@email.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 9876543210",
    icon: Phone,
  },
  {
    label: "Business Name",
    value: "MSME Manufacturing Pvt. Ltd.",
    icon: Building2,
  },
  {
    label: "GST Number",
    value: "22AAAAA0000A1Z5",
    icon: BadgeCheck,
  },
  {
    label: "PAN Number",
    value: "ABCDE1234F",
    icon: CreditCard,
  },
  {
    label: "Business Type",
    value: "Manufacturing",
    icon: Building2,
  },
  {
    label: "Business Address",
    value: "Industrial Area, Bengaluru, Karnataka",
    icon: MapPin,
  },
];

export default function BusinessInfo() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Business Information
        </h2>

        <button className="rounded-xl border border-emerald-500 px-5 py-2 font-semibold text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-500/10">
          Edit
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {details.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800"
            >

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-emerald-100 p-3 dark:bg-emerald-500/15">

                  <Icon
                    className="text-emerald-600"
                    size={20}
                  />

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    {item.label}
                  </p>

                  <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </h3>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}