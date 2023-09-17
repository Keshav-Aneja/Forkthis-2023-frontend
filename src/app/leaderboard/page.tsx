"use client";
import Sidebarrr from "@/components/Sidebar";
import PointCard from "@/components/PointCard";
import Leaderboard from "@/sections/Leaderboard";
import RankTable from "@/sections/RankTable";
import DashboardInfo from "@/sections/DashboardInfo";
import RepoPanel from "@/sections/RepoPanel";
// import { Leaderboard } from "styled-icons/material";

export default function page() {
  return (
    <div className="flex w-[100%] z-0">
      <Sidebarrr />
      <div className="w-[100%] lg:ml-[7%] px-10 mt-16">
        <div className="top-section flex flex-col md:flex-row justify-between items-center">
          <PointCard rank={12} scoredPoints={400} totalPoints={600} />
          <div
            className="w-[100%] h-1 md:w-8 md:h-0 lg:w-[3px] lg:h-[300px] lg:block p-0 m-0
        bg-gradient-to-r from-[rgba(33,36,38,1)] via-[rgba(84,87,89,1)] to-[rgba(33,36,38,1)] lg:bg-gradient-to-t"
          ></div>
          <Leaderboard
            rankHolders={["Mr.Bean", "PewDiePie", "Mr.Beast6000"]}
            rankScores={[310, 330, 250]}
          />
        </div>
        <RankTable />
      </div>
    </div>
  );
}
