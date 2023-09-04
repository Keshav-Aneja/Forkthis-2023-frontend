import React from "react";
import Sidebarrr from "@/components/Sidebar";
import Cardbox from "@/components/Cardbox";

export default function Resources() {
  return (
    <>
      <main className="h-screen w-screen overflow-hidden">
        <div className="w-screen z-0 flex">
          <Sidebarrr />
          <div className="w-[8%] pr-[0.4%] bg-black"></div>
          <div className="flex w-screen overflow-x-scroll pl-7  scrollbar-none">
            <div className="w-screen">
              <div className=" py-1.5 px-[35%] font-gilroyRegular text-4xl font-extrabold text-[#ffffff]">
                Resources
              </div>
              <div>
                <div className="p-1 pl-10 font-gilroyRegular text-2xl font-extrabold text-[#7B7B7B]">
                  Youtube
                </div>
                <Cardbox buttonCol="red" />
              </div>
              <div className="w-screen">
                <div className="p-1 pl-10 font-gilroyRegular text-2xl font-extrabold text-[#7B7B7B]">
                  Github
                </div>
                <Cardbox buttonCol="blue" />
              </div>
              <div className="w-screen">
                <div className="p-1 pl-10 font-gilroyRegular text-2xl font-extrabold text-[#7B7B7B]">
                  Articles
                </div>
                <Cardbox buttonCol="green" />
              </div>
              <div className="absolute top-0 right-0 w-[5%] h-screen bg-black"></div> {/* Add black rectangle */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
