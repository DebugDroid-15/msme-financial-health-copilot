import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  BadgeCheck,
} from "lucide-react";

import { DashboardResponse } from "@/lib/api/dashboard";

interface Props {
  dashboard: DashboardResponse;
}

export default function KPICards({
  dashboard,
}: Props) {
  const data = [
    {
      title: "Monthly Revenue",
      value: `₹${(
        dashboard.latest_month.revenue / 100000
      ).toFixed(2)}L`,
      icon: TrendingUp,
      color: "text-emerald-600",
      sub: `${dashboard.analytics.revenue_growth}%`,
    },
    {
      title: "Expenses",
      value: `₹${(
        dashboard.latest_month.expenses / 100000
      ).toFixed(2)}L`,
      icon: TrendingDown,
      color: "text-red-500",
      sub: "Current Month",
    },
    {
      title: "Cash Flow",
      value: `₹${(
        dashboard.latest_month.cash_flow / 100000
      ).toFixed(2)}L`,
      icon: Wallet,
      color: "text-blue-600",
      sub: `${dashboard.financial.cashflow}/100`,
    },
    {
      title: "Loan Readiness",
      value: dashboard.financial.risk,
      icon: BadgeCheck,
      color: "text-indigo-600",
      sub: `${dashboard.financial.funding_readiness}%`,
    },
  ];

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

                <p
                  className={`text-sm mt-2 ${item.color}`}
                >
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