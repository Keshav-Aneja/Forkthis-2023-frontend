"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface LeaderboardData {
  _id: string;
  githubUsername: string;
  name: string;
  score: number;
  id: string;
  __v: number;
  rank: number;
}

export default function RankTable() {
  const [currPage, setPage] = useState(0);
  const [leaderboarddata, setLeaderboardData] = useState<LeaderboardData[]>([]);
  let maxPage = Math.ceil(leaderboarddata.length / 10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://forkthis-backend.csivit.com/leaderboard?limit=10&page=${currPage}`
        );
        const data: LeaderboardData[] = res.data.data;
        setLeaderboardData(data);
      } catch (err: any) {
        toast.error(err, { theme: "dark" });
      }
    };
    fetchData();
  }, [currPage]);

  return (
    <>
      <div className="rank-table w-full min-h-[50vh] mt-6 rounded-3xl border-2 border-gray-700">
        <table className="w-full">
          <tr className="font-gilroyBlack tracking-wide text-xl text-center border-b-2 border-gray-700 h-14">
            <td>Rank</td>
            <td>Username</td>
            <td>Points</td>
          </tr>
          {leaderboarddata.map((data, i) => (
            <tr
              key={i}
              className="text-center text-gray-400 border-t-2 border-gray-700 h-10 font-gilroyRegular"
            >
              <td>{data.rank}</td>
              <td>{data.githubUsername}</td>
              <td>{data.score}</td>
            </tr>
          ))}
        </table>
      </div>
      <div
        className={`buttons w-full flex ${
          currPage === 0 ? "justify-end" : "justify-between"
        } gap-4 mt-4 md:justify-end`}
      >
        <div
          className={`px-6 py-2 bg-[#8A61FF] rounded-xl text-black font-gilroyBlack text-lg hover:bg-[#4a18bd] cursor-pointer hover:text-[#af99ed] ${
            currPage < 1 ? "hidden" : "block"
          }`}
          onClick={() =>
            setPage((page) => (currPage > 0 ? currPage - 1 : currPage))
          }
        >
          Previous
        </div>
        <div
          className={`px-6 py-2 bg-[#8A61FF] rounded-xl text-black font-gilroyBlack text-lg hover:bg-[#4a18bd] cursor-pointer hover:text-[#af99ed] ${
            currPage === maxPage - 1 ? "hidden" : "block"
          } `}
          onClick={() =>
            setPage((page) =>
              currPage < maxPage - 1 ? currPage + 1 : currPage
            )
          }
        >
          Next
        </div>
      </div>
    </>
  );
}
