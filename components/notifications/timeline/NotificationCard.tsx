import {
  Bell,
  Brain,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  time: string;
  type: "ai" | "document" | "scheme" | "security";
  unread?: boolean;
}

export default function NotificationCard({
  title,
  description,
  time,
  type,
  unread,
}: Props) {
  const config = {
    ai: {
      icon: Brain,
      color: "text-violet-600",
      bg: "bg-violet-100 dark:bg-violet-500/15",
    },
    document: {
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-500/15",
    },
    scheme: {
      icon: Landmark,
      color: "text-emerald-600",
      bg: "bg-emerald-100 dark:bg-emerald-500/15",
    },
    security: {
      icon: ShieldCheck,
      color: "text-red-600",
      bg: "bg-red-100 dark:bg-red-500/15",
    },
  };

  const item = config[type];
  const Icon = item.icon;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-[#111827]">

      <div className="flex gap-5">

        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}>

          <Icon
            className={item.color}
            size={24}
          />

        </div>

        <div className="flex-1">

          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-2">

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {title}
                </h3>

                {unread && (
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                )}

              </div>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                {description}
              </p>

            </div>

            <Bell
              size={18}
              className="text-slate-400"
            />

          </div>

          <p className="mt-5 text-sm text-slate-400">
            {time}
          </p>

        </div>

      </div>

    </div>
  );
}