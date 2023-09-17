"use client";
import { useState } from "react";
const rankers = [
  {
    rank: 1,
    name: "Ella Smith",
    points: 500,
  },
  {
    rank: 2,
    name: "Liam Johnson",
    points: 490,
  },
  {
    rank: 3,
    name: "Olivia Williams",
    points: 480,
  },
  {
    rank: 4,
    name: "Noah Jones",
    points: 470,
  },
  {
    rank: 5,
    name: "Ava Brown",
    points: 460,
  },
  {
    rank: 6,
    name: "Lucas Davis",
    points: 450,
  },
  {
    rank: 7,
    name: "Mia Wilson",
    points: 440,
  },
  {
    rank: 8,
    name: "James Taylor",
    points: 430,
  },
  {
    rank: 9,
    name: "Sophia Lee",
    points: 420,
  },
  {
    rank: 10,
    name: "William Anderson",
    points: 410,
  },
  {
    rank: 11,
    name: "Harper Martinez",
    points: 400,
  },
  {
    rank: 12,
    name: "Benjamin Garcia",
    points: 390,
  },
  {
    rank: 13,
    name: "Evelyn Rodriguez",
    points: 380,
  },
  {
    rank: 14,
    name: "Alexander Hernandez",
    points: 370,
  },
  {
    rank: 15,
    name: "Charlotte Gonzalez",
    points: 360,
  },
  {
    rank: 16,
    name: "Daniel Perez",
    points: 350,
  },
  {
    rank: 17,
    name: "Emily Flores",
    points: 340,
  },
  {
    rank: 18,
    name: "Mason Smith",
    points: 330,
  },
  {
    rank: 19,
    name: "Luna Davis",
    points: 320,
  },
  {
    rank: 20,
    name: "Michael Wilson",
    points: 310,
  },
  {
    rank: 21,
    name: "Scarlett Lewis",
    points: 300,
  },
  {
    rank: 22,
    name: "Matthew Harris",
    points: 290,
  },
  {
    rank: 23,
    name: "Lily Clark",
    points: 280,
  },
  {
    rank: 24,
    name: "Elijah Turner",
    points: 270,
  },
  {
    rank: 25,
    name: "Grace Thompson",
    points: 260,
  },
  {
    rank: 26,
    name: "Aiden Robinson",
    points: 250,
  },
  {
    rank: 27,
    name: "Zoe White",
    points: 240,
  },
  {
    rank: 28,
    name: "Carter Hall",
    points: 230,
  },
  {
    rank: 29,
    name: "Layla Scott",
    points: 220,
  },
  {
    rank: 30,
    name: "Jackson Green",
    points: 210,
  },
  {
    rank: 31,
    name: "Chloe King",
    points: 200,
  },
  {
    rank: 32,
    name: "Logan Turner",
    points: 190,
  },
  {
    rank: 33,
    name: "Avery Parker",
    points: 180,
  },
  {
    rank: 34,
    name: "Ethan Murphy",
    points: 170,
  },
  {
    rank: 35,
    name: "Hannah Adams",
    points: 160,
  },
  {
    rank: 36,
    name: "Mason Lewis",
    points: 150,
  },
  {
    rank: 37,
    name: "Lily Martin",
    points: 140,
  },
  {
    rank: 38,
    name: "Owen Hill",
    points: 130,
  },
  {
    rank: 39,
    name: "Aria Baker",
    points: 120,
  },
  {
    rank: 40,
    name: "William Scott",
    points: 110,
  },
  {
    rank: 41,
    name: "Sofia Allen",
    points: 100,
  },
  {
    rank: 42,
    name: "Elijah Brown",
    points: 90,
  },
  {
    rank: 43,
    name: "Scarlett Mitchell",
    points: 80,
  },
  {
    rank: 44,
    name: "Henry Turner",
    points: 70,
  },
  {
    rank: 45,
    name: "Grace Murphy",
    points: 60,
  },
  {
    rank: 46,
    name: "Liam Foster",
    points: 50,
  },
  {
    rank: 47,
    name: "Emma Cooper",
    points: 40,
  },
  {
    rank: 48,
    name: "Mia Parker",
    points: 30,
  },
  {
    rank: 49,
    name: "Aiden Harris",
    points: 20,
  },
  {
    rank: 50,
    name: "Ella Wright",
    points: 10,
  },
];

export default function RankTable() {
  const [currPage, setPage] = useState(0);
  let maxPage = Math.ceil(rankers.length / 20);
  return (
    <>
      <div className="rank-table w-full min-h-[50vh] mt-6 rounded-3xl border-2 border-gray-700">
        <table className="w-full">
          <tr className="font-gilroyBlack tracking-wide text-xl text-center border-b-2 border-gray-700 h-14">
            <td>Rank</td>
            <td>Username</td>
            <td>Points</td>
          </tr>
          {rankers.map((data, i) => {
            if (i >= currPage * 20 && i < currPage * 20 + 20) {
              return (
                <RankListItem
                  rank={data.rank}
                  name={data.name}
                  points={data.points}
                  key={i}
                />
              );
            }
          })}
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

function RankListItem({
  rank,
  name,
  points,
}: {
  rank: number;
  name: string;
  points: number;
}) {
  return (
    <tr className="text-center text-gray-400 border-t-2 border-gray-700 h-10 font-gilroyRegular">
      <td>{rank}.</td>
      <td>{name}</td>
      <td>{points}</td>
    </tr>
  );
}
