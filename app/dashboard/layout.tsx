import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import Topbar from "@/components/dashboard/topbar/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1220]">

      <Sidebar />

      <div className="ml-[280px]">

        <Topbar />

        <main className="p-8">

          {children}

        </main>

      </div>

    </div>
  );
}