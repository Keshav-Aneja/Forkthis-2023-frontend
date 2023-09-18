"use client";
import Sidebarrr from "@/components/Sidebar";
import DashboardInfo from "@/sections/DashboardInfo";
import RepoPanel from "@/sections/RepoPanel";
import Cookie from 'js-cookie';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const token = Cookie.get("token")
    if(!token){
      router.push("/")
      toast.error("Kindly sign in with Github", {theme:"dark"})
    }
  }, []);
  
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
