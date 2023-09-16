"use client";
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
];

export default function RankTable() {
  return (
    <div className="rank-table w-full min-h-[50vh] mt-6 rounded-3xl border-2 border-gray-700">
      <table className="w-full">
        <tr className="font-gilroyBlack tracking-wide text-xl text-center border-b-2 border-gray-700 h-14">
          <td>Rank</td>
          <td>Username</td>
          <td>Points</td>
        </tr>
        {rankers.map((data, i) => {
          return (
            <RankListItem
              rank={data.rank}
              name={data.name}
              points={data.points}
              key={i}
            />
          );
        })}
      </table>
    </div>
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
    <tr className="text-center text-gray-400 border-b-2 border-gray-700 h-10 font-gilroyRegular">
      <td>{rank}.</td>
      <td>{name}</td>
      <td>{points}</td>
    </tr>
  );
}
