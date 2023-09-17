'use client'

import CountdownTimer from "@/components/CountdownTimer";
import ProgressCircular from "../components/ProgressCircular";
import axios from 'axios';
export default function DashboardInfo() {
  const targetDate = new Date("2023-08-31T23:59:59");
  

  return (
    <div>
      <div className="flex py-5 mb-12 mt-20 justify-center items-center font-gilroyRegular text-5xl font-black lg:mt-0 lg:mb-10">
        Dashboard
      </div>
      <div className="flex w-[100%] bg-opacity-30 px-3 py-5 flex-col items-center justify-center md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        <div className="ml-0 px-2 py-2 flex flex-col justify-between items-center md:ml-10">
          <div className="mb-12 text-2xl font-bold font-gilroyRegular text-center">
            Time Left
          </div>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className="px-2 py-2 justify-center">
          <div className="mb-12 text-2xl font-bold font-gilroyRegular text-center">
            Points Scored
          </div>
          <ProgressCircular
            name={"pointsScored"}
            currVal={400}
            totalVal={600}
            color={"#7C4BC8"}
          />
        </div>
        <div className="px-2 py-2 justify-center ">
          <div className="mb-12 text-2xl font-bold font-gilroyRegular text-center">
            Issues Closed
          </div>
          <ProgressCircular
            name={"issuesClosed"}
            currVal={7}
            totalVal={16}
            color={"#22A385"}
          />
        </div>
      </div>
    </div>
  );
}
