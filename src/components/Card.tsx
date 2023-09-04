import React from "react";
import Image from 'next/image'

type CardProps = {
  imagePath: string;
  buttonColour: number;  //0 = red, 1= blue, 2=green
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
    <div className="bg-[#212426] w-[90%] max-h-[270px] rounded-lg p-3 m-2 opacity-80 flex">
      <div className="w-[30%] h-[80%]">
        <Image
        className="m-1 rounded-xl"
          src={imagePath}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
      <div className="flex-col">
        <div className={`font-bold text-xl px-6  font-gilroyRegular ${(buttonColour===0) ? ("text-[#DD6B5D]") : ((buttonColour===1) ? ("text-[#3C63AD]") : ("text-[#81E1B1]") )}`}>
            {headerText}
        </div>
        <div className="pl-6 font-gilroyRegular text-[#8C8E8F] font-semibold font-poppins "> 
            {content}
        </div>
        <div className={`font-bold w-28 h-8 rounded-full text-xs ${(buttonColour === 0) ? ("bg-[#DD6B5D]") : ((buttonColour === 1) ? ("bg-[#3C63AD]") : ("bg-[#81E1B1]") )} flex items-center justify-center mt-2 mx-8`}>
            View Report
        </div>

      </div>
    </div>
  );
};
export default Card;
