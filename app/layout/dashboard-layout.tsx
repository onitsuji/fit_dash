import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex flex-row p-5">
      <div className="w-12">sidebar</div>
      <div className="ml-2">
        <Outlet />
      </div>
    </div>
  );
}
