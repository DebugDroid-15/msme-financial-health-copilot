import ProfileHero from "./profile/ProfileHero";
import BusinessInfo from "./business/BusinessInfo";
import SubscriptionCard from "./subscription/SubscriptionCard";
import SecurityCard from "./security/SecurityCard";
import DangerZone from "./danger/DangerZone";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      <ProfileHero />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="space-y-8 xl:col-span-2">

          <BusinessInfo />

        </div>

        <div className="space-y-8">

          <SubscriptionCard />

          <SecurityCard />

        </div>

      </div>

      <DangerZone />

    </div>
  );
}