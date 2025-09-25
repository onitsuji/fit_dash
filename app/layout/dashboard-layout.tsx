import { Outlet } from "react-router";
import { AppSidebar } from "~/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { type VariantProps, cva } from "class-variance-authority";

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
