import React from "react";
import Sidebarrr from "@/components/Sidebar";
import Cardbox from "@/components/Cardbox";
import cardData from "@/app/cardData.json";
export default function Resources() {
  return (
    <div className="overflow-x-hidden">
      <Sidebarrr />
      <div className="flex mb-0 mt-24 justify-center items-center font-gilroyRegular text-5xl font-black lg:mt-4 lg:mb-0">
        Resources
      </div>
      <main className="h-screen md:h-[80%] w-screen overflow-x-hidden lg:ml-[7%]">
        <div className="w-screen z-0 flex mt-20 lg:mt-0">
          {/* <div className="w-[8%] pr-[0.4%] bg-black"></div> */}
          <div className="flex w-[80%] pl-0 lg:pl-7 scrollbar-none">
            <div className="w-screen">
              <div>
                <div className="p-1 pl-10 font-gilroyRegular text-2xl font-extrabold text-[#7B7B7B]">
                  Youtube
                </div>
                <Cardbox
                  buttonCol={"red"}
                  resData={cardData.YouTube}
                  btnText={"View video"}
                />
              </div>
              <div className="w-screen">
                <div className="p-1 pl-10 font-gilroyRegular text-2xl font-extrabold text-[#7B7B7B]">
                  Github
                </div>
                <Cardbox
                  buttonCol={"blue"}
                  resData={cardData["GitHub Repositories"]}
                  btnText={"View repository"}
                />
              </div>
              <div className="w-screen">
                <div className="p-1 pl-10 font-gilroyRegular text-2xl font-extrabold text-[#7B7B7B]">
                  Articles
                </div>
                <Cardbox
                  buttonCol={"green"}
                  resData={cardData.Websites}
                  btnText={"Read article"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
