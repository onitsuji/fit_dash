import { Scale } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { SidebarMenuButton, SidebarMenuItem } from "~/components/ui/sidebar";
import { WeightEntryForm } from "~/components/weight-entry-form";

export function ActionWeightEntry() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Scale />
            Log Weight
          </SidebarMenuButton>
        </SidebarMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log Your Weight</DialogTitle>
          <DialogDescription>
            Enter your weight with your preferred unit (e.g., kg, lbs).
          </DialogDescription>
        </DialogHeader>
        <WeightEntryForm
          onSuccess={() => {
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
