"use client"
import Sidebarrr from "@/components/Sidebar";
import PointCard from "@/components/PointCard";
import Leaderboard from "@/sections/Leaderboard";
import RankTable from "@/sections/RankTable";
// import { Leaderboard } from "styled-icons/material";
import axios from 'axios';
import {useState, useEffect} from 'react';
import { toast } from "react-toastify";
import Cookie from 'js-cookie';
import { useRouter } from "next/navigation";
interface LeaderboardData {
  _id: string;
  githubUsername: string;
  name: string;
  score: number;
  id: string;
  __v: number;
  rank:number;
}
interface LeaderboardDisplay{
  username: string;
  score: number;
}

export default function Page() {
  const router = useRouter();
  const [first, setFirst] = useState<LeaderboardDisplay>({username: "", score: 0});
  const [second, setSecond] = useState<LeaderboardDisplay>({username: "", score: 0});
  const [third, setThird] = useState<LeaderboardDisplay>({username: "", score: 0});
  const [rank, setRank] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const token = Cookie.get("token");
  if(!token){
    router.push("/");
    toast.error("Kindly sign in with Github", {theme:"dark"});
  }
  useEffect(() => {
    const fetchData = async () => {
      try{        const userdata = await axios.get(`https://forkthis-backend.csivit.com/user`, {
          headers: {
            "Authorization": `${token}`
          }
        });
        setScore(userdata.data.score);
        setRank(userdata.data.rank)
        const res = await axios.get(`https://forkthis-backend.csivit.com/leaderboard`);
        const data:LeaderboardData[] = res.data.data;
        setFirst({username: data[0].githubUsername, score: data[0].score});
        setSecond({username: data[1].githubUsername, score: data[1].score});
        setThird({username: data[2].githubUsername, score: data[2].score});
      }
      catch(err:any){
        toast.error(err, {theme:"dark"});
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex w-[100%] z-0">
      <Sidebarrr />
      <div className="w-[100%] lg:ml-[7%] px-10 mt-16">
        <div className="top-section flex flex-col md:flex-row justify-between items-center">
          <PointCard rank={rank} scoredPoints={score} totalPoints={600} />
          <div
            className="w-[100%] h-1 md:w-8 md:h-0 lg:w-[3px] lg:h-[300px] lg:block p-0 m-0
        bg-gradient-to-r from-[rgba(33,36,38,1)] via-[rgba(84,87,89,1)] to-[rgba(33,36,38,1)] lg:bg-gradient-to-t"
          ></div>
          <Leaderboard
            rankHolders={[second.username, first.username, third.username]}
            rankScores={[second.score, first.score, third.score]}
          />
        </div>
        <RankTable />
      </div>
    </div>
  );
}
