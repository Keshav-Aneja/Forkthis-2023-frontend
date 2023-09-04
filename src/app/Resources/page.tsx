'use client';
import Card from "@/components/Card";
import Sidebarrr from "@/components/Sidebarrr";
import Cardbox from "@/components/Cardbox";

import img1 from "/public/images/cat.png";


export default function Resources() {
  
  return (
    <>
      <main className="">
        <div className=" w-[100%] z-0 flex">
          <Sidebarrr />
          
          <div className="w-[9%] bg-black">

          </div>
        <div className="flex flex-col justify-center items-center h-60vh w-screen pl-[0.4%] overflow-y-auto">
          
          <div className=" font-gilroyRegular text-5xl font-extrabold text-[#ffffff] py-5">
            Resources
          </div>
          <div >
            <div className="font-gilroyRegular text-3xl font-extrabold text-[#7B7B7B]">Youtube</div>
            <Cardbox buttonColour={0}/>
          </div>
          <div className="flex-col">
            <div className="font-gilroyRegular text-3xl font-extrabold text-[#7B7B7B]">Github</div>
            <Cardbox buttonColour={1}/>
          </div>
          <div className="flex-col">
            <div className="font-gilroyRegular text-3xl font-extrabold text-[#7B7B7B]">Articles</div>
            <Cardbox buttonColour={2}/>
          </div>
          
          
          
          </div>
        </div>
    </main>
    </>
  );
}
