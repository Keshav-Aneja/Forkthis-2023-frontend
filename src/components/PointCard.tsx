"use client";
import Image from "next/image";
import ProgressCircular from "./ProgressCircular";
interface cardDetails {
  rank: number;
  scoredPoints: number;
  totalPoints: number;
}

const PointCard: React.FC<cardDetails> = ({
  rank,
  scoredPoints,
  totalPoints,
}) => {
  return (
    <div className="points-card w-full flex-col md:w-[33%] h-fit bg-[#212426] flex lg:flex-row justify-between items-center rounded-2xl px-6 py-6 md:py-4 gap-6 lg:gap-4 drop-shadow-2xl mb-6">
      <div className="profile flex flex-row md:flex-col items-center gap-6">
        <Image
          src="/images/user.png"
          alt="profile"
          width={80}
          height={80}
          className="drop-shadow-2xl"
        ></Image>
        <p className="font-gilroyRegular text-lg font-bold tracking-wider text-center w-full">
          My Rank
          <br />
          {rank}
        </p>
      </div>
      <div
        className="w-[100%] h-1 lg:w-[3px] lg:h-[200px] lg:block p-0 m-0
        bg-gradient-to-r from-[rgba(33,36,38,1)] via-[rgba(84,87,89,1)] to-[rgba(33,36,38,1)] lg:bg-gradient-to-t"
      ></div>
      <ProgressCircular
        name={"personal_score"}
        currVal={scoredPoints}
        totalVal={totalPoints}
        color={"#7C4BC8"}
      />
    </div>
  );
};
export default PointCard;
