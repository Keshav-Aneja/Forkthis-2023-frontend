"use client";
import React from "react";

interface ProgressCircularProps {
  name: string;
  currVal: number;
  totalVal: number;
  color: string;
}

const ProgressCircular: React.FC<ProgressCircularProps> = ({
  name,
  currVal,
  totalVal,
  color,
}) => {
  let progress = (currVal * 360) / totalVal;
  return (
    <>
      <div className="w-60 h-60 rounded-[50%] flex justify-center items-center  border-2 border-[#343739]">
        <div
          className="circle w-[90%] h-[90%] rounded-[50%] flex justify-center items-center"
          style={{
            background: `conic-gradient(#020301 0deg,
          ${color} ${progress}deg,
          #020301 ${progress}deg,
          #020301 360deg)`,
          }}
        >
          <div className="w-[70%] h-[70%] rounded-[50%] flex flex-col justify-center items-center bg-[#212426] border-2 border-[#343739] drop-shadow-lg">
            <span>
              <h2 className="text-center text-3xl font-bold">
                {name === "percentage"
                  ? ((currVal * 100) / totalVal).toFixed(0) + "%"
                  : currVal}
              </h2>
              <p className="text-[#C2C2C2]">
                {name === "percentage" ? "Issues Closed" : "Out Of " + totalVal}
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProgressCircular;
