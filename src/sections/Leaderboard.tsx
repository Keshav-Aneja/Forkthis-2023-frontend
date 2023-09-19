"use client";
import Image from "next/image";
interface rankings {
  rankHolders: Array<string>;
  rankScores: Array<number>;
}
const Leaderboard: React.FC<rankings> = ({ rankHolders, rankScores }) => {
  return (
    <div className="w-full h-fit min-h-[50vh] bg-[#212426] rounded-2xl mt-6 flex flex-col justify-between items-center lg:flex-row lg:items-baseline lg:w-[60%] ">
      <div className="first py-2 md:w-full lg:h-full lg:self-end order-2 lg:order-1">
        <div className="container py-2 flex flex-col justify-center items-center md:px-4 md:flex-row md:justify-between lg:h-full lg:flex-col lg:justify-center lg:items-center lg:gap-4">
          <Image
            src="/images/silver.png"
            alt="medal"
            width={100}
            height={100}
            className="w-18 h-18"
          ></Image>

          <div className="md:w-full flex flex-col items-center justify-center">
            <div className="Name text-3xl font-gilroyBlack">
              {rankHolders[0]}
            </div>
            <div className="score font-gilroyRegular">
              Score: {rankScores[0]}
            </div>
          </div>
        </div>
      </div>
      <div className="first py-2 md:w-full lg:h-full lg:self-start order-1 lg:order-2">
        <div className="container py-2 flex flex-col justify-center items-center md:px-4 md:flex-row md:justify-between lg:h-full lg:flex-col lg:justify-center lg:items-center lg:gap-4">
          <Image
            src="/images/gold.png"
            alt="medal"
            width={100}
            height={100}
            className="w-18 h-18"
          ></Image>

          <div className="md:w-full flex flex-col items-center justify-center">
            <div className="Name text-3xl font-gilroyBlack">
              {rankHolders[1]}
            </div>
            <div className="score font-gilroyRegular">
              Score: {rankScores[1]}
            </div>
          </div>
        </div>
      </div>
      <div className="first py-2 md:w-full lg:h-full lg:self-end order-3 lg:order-3">
        <div className="container py-2 flex flex-col justify-center items-center md:px-4 md:flex-row md:justify-between lg:h-full lg:flex-col lg:justify-center lg:items-center lg:gap-4">
          <Image
            src="/images/bronze.png"
            alt="medal"
            width={100}
            height={100}
            className="w-18 h-18"
          ></Image>

          <div className="md:w-full flex flex-col items-center justify-center">
            <div className="Name text-3xl font-gilroyBlack">
              {rankHolders[2]}
            </div>
            <div className="score font-gilroyRegular">
              Score: {rankScores[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
