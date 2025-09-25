import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "~/components/ui/sidebar";
import { ActionWeightEntry } from "./actions/action-weight-entry";

export function GroupActions() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Actions</SidebarGroupLabel>
      <SidebarGroupContent>
        <ActionWeightEntry />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
