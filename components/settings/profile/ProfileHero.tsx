import {
  BadgeCheck,
  Edit,
  Mail,
  Phone,
} from "lucide-react";

export default function ProfileHero() {
  return (
    <>
      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Manage your account, business information,
            security, subscription and AI preferences.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500">

          <Edit size={18} />

          Edit Profile

        </button>

      </div>

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

          <div className="flex items-center gap-6">

            <div className="relative">

              <img
                src="https://i.pravatar.cc/160"
                alt="Profile"
                className="h-28 w-28 rounded-full border-4 border-white object-cover"
              />

              <div className="absolute bottom-1 right-1 rounded-full bg-emerald-500 p-1">

                <BadgeCheck size={20} />

              </div>

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Rajesh Kumar
              </h2>

              <p className="mt-1 text-emerald-200">
                Founder & CEO
              </p>

              <p className="text-slate-300">
                MSME Manufacturing Pvt. Ltd.
              </p>

              <div className="mt-5 flex flex-wrap gap-5">

                <div className="flex items-center gap-2">

                  <Mail size={16} />

                  rajesh@email.com

                </div>

                <div className="flex items-center gap-2">

                  <Phone size={16} />

                  +91 9876543210

                </div>

              </div>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

              <h3 className="text-5xl font-bold">
                94
              </h3>

              <p className="mt-2 text-slate-300">
                Health Score
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

              <h3 className="text-5xl font-bold">
                94%
              </h3>

              <p className="mt-2 text-slate-300">
                Funding Ready
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}