import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  BadgeCheck,
} from "lucide-react";

const data = [
  {
    title: "Monthly Revenue",
    value: "₹18.4L",
    icon: TrendingUp,
    color: "text-emerald-600",
    sub: "+5.2%",
  },
  {
    title: "Expenses",
    value: "₹10.2L",
    icon: TrendingDown,
    color: "text-red-500",
    sub: "-1.1%",
  },
  {
    title: "Cash Flow",
    value: "+12%",
    icon: Wallet,
    color: "text-blue-600",
    sub: "Healthy",
  },
  {
    title: "Loan Readiness",
    value: "High",
    icon: BadgeCheck,
    color: "text-indigo-600",
    sub: "92%",
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {data.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="rounded-3xl p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <div className="flex justify-between mt-3">

              <div>

                <h2 className="text-3xl font-bold">
                  {item.value}
                </h2>

                <p className={`text-sm mt-2 ${item.color}`}>
                  {item.sub}
                </p>

              </div>

              <Icon
                className={item.color}
                size={30}
              />

            </div>

          </Card>
        );
      })}
    </div>
  );
}