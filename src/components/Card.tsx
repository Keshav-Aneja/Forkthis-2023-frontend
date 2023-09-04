import React from "react";
import Image from "next/image";

type CardProps = {
  imagePath: string;
  buttonColour: string; // 0 = red, 1 = blue, 2 = green
  headerText: string;
  content: string;
  link?: string;
};

const Card: React.FC<CardProps> = ({
  imagePath,
  buttonColour,
  headerText,
  content,
  link,
}) => {
  return (
    <div className="w-72 h-[100%] mx-2 flex-shrink-0">
      <div className="bg-[#212426] rounded-lg p-2 m-1.5 h-full opacity-80 flex w-[100%]">
        <div className="w-1/3">
          <Image
            className="m-0.5 rounded-xl"
            src={imagePath}
            width={220}
            height={220}
            alt="Picture of the author"
          />
        </div>
        <div className="w-2/3">
          <div className={`font-bold text-xl px-6 font-gilroyRegular ${
            buttonColour === "red"
              ? "text-[#DD6B5D]"
              : buttonColour === "blue"
              ? "text-[#3C63AD]"
              : "text-[#81E1B1]"
          }`}>
            {headerText}
          </div>
          <div className="pl-6 font-gilroyRegular text-[#8C8E8F] font-semibold font-poppins">
            {content}
          </div>
          <div
            className={`font-bold w-28 h-8 rounded-full text-xs ${
              buttonColour === "red"
                ? "bg-[#DD6B5D]"
                : buttonColour === "blue"
                ? "bg-[#3C63AD]"
                : "bg-[#81E1B1]"
            } flex items-center justify-center mt-2 mx-8`}>
            View Report
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
