import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface Props {
  score: number;
  risk: string;
}

export default function HealthScoreCard({
  score,
  risk,
}: Props) {
  return (
    <Card className="rounded-3xl p-6 shadow-sm border">

      <h3 className="text-lg font-semibold">
        Financial Health Score
      </h3>

      <div className="flex justify-center py-8">

        <div className="relative w-44 h-44">

          <svg
            className="rotate-[-90deg]"
            viewBox="0 0 160 160"
          >

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#E2E8F0"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#059669"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="408"
              strokeDashoffset={
                408 - (408 * score) / 100
              }
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-5xl font-bold text-emerald-600">
              {score}
            </h2>

            <p className="text-slate-500">
              /100
            </p>

          </div>

        </div>

      </div>

      <div className="bg-emerald-50 rounded-xl p-3 flex gap-2 items-center">

        <TrendingUp
          className="text-emerald-600"
          size={18}
        />

        <p className="text-sm text-emerald-700">
          Current Risk Level: <strong>{risk}</strong>
        </p>

      </div>

    </Card>
  );
}