import { Outlet } from "react-router";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div>
          <SidebarTrigger />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
