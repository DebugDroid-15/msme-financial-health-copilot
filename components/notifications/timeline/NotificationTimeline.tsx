import NotificationCard from "./NotificationCard";

const notifications = [
  {
    title: "Financial Health Improved",
    description:
      "Your financial score increased from 88 to 91 after the latest GST analysis.",
    time: "5 minutes ago",
    type: "ai" as const,
    unread: true,
  },
  {
    title: "New Government Scheme Available",
    description:
      "A new MSME Manufacturing subsidy has been matched with your business profile.",
    time: "20 minutes ago",
    type: "scheme" as const,
    unread: true,
  },
  {
    title: "Document Successfully Processed",
    description:
      "Your uploaded Bank Statement has been analyzed successfully.",
    time: "1 hour ago",
    type: "document" as const,
  },
  {
    title: "Security Alert",
    description:
      "A new login was detected from Bengaluru, Karnataka.",
    time: "3 hours ago",
    type: "security" as const,
  },
  {
    title: "AI Recommendation Updated",
    description:
      "Your funding readiness has increased to 91%. View the latest recommendations.",
    time: "Yesterday",
    type: "ai" as const,
  },
];

export default function NotificationTimeline() {
  return (
    <section className="space-y-6">

      {notifications.map((notification, index) => (

        <NotificationCard
          key={index}
          title={notification.title}
          description={notification.description}
          time={notification.time}
          type={notification.type}
          unread={notification.unread}
        />

      ))}

    </section>
  );
}