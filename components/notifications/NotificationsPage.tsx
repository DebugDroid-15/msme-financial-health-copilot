import Hero from "./hero/Hero";
import StatsCards from "./stats/StatsCards";
import FilterBar from "./filters/FilterBar";
import NotificationTimeline from "./timeline/NotificationTimeline";
import SmartInsight from "./sidebar/SmartInsight";
import QuickPreferences from "./sidebar/QuickPreferences";
import HistoryButton from "./history/HistoryButton";

export default function NotificationsPage() {
  return (
    <div className="space-y-8">

      <Hero />

      <StatsCards />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2 space-y-6">

          <FilterBar />

          <NotificationTimeline />

          <HistoryButton />

        </div>

        <div className="space-y-6">

          <SmartInsight />

          <QuickPreferences />

        </div>

      </div>

    </div>
  );
}