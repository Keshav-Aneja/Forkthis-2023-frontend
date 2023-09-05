"use client";
import Sidebarrr from "@/components/Sidebar";
import DashboardInfo from "@/sections/DashboardInfo";
import RepoPanel from "@/sections/RepoPanel";
export default function page() {
  return (
    <div className="flex w-[100%] z-0">
      <Sidebarrr />
      <div className="w-[100%] lg:ml-[7%]">
        <DashboardInfo />
        <RepoPanel />
      </div>
    </div>
  );
}
