import { Sidebar, SidebarContent } from "~/components/ui/sidebar";
import { GroupPlatform } from "./group-platform";
import { GroupActions } from "./group-actions";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <GroupPlatform />
        <GroupActions />
      </SidebarContent>
    </Sidebar>
  );
}
