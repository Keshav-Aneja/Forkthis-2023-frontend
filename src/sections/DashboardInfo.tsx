"use client";

import CountdownTimer from "@/components/CountdownTimer";
import ProgressCircular from "../components/ProgressCircular";
import axios from "axios";
import {useEffect, useState} from 'react';
import Cookie from 'js-cookie';
import { toast } from "react-toastify";

export default function DashboardInfo() {
  const targetDate = new Date("2023-09-24T23:59:59");
  const [score, setScore] = useState(0);
  const [issuesClosed, setIssuesClosed] = useState(0);

  useEffect(() => {
    const getScore = async () => {
      try{
        const token = Cookie.get("token");
        const response = await axios.get(`http://localhost:3001/user`,
        {
          headers: {
            "Authorization": `${token}`
          }
        });
        setScore(response.data.score);
        setIssuesClosed(response.data.noOfIssuesSolved);
      }
      catch(err:any){
        toast.error(err,{theme:"dark"});
      }
    }
    getScore();
  }, [])
  
  return (
    <div>
      <div className="flex py-5 mb-12 mt-20 justify-center items-center font-gilroyRegular text-5xl font-black lg:mt-0 lg:mb-10">
        Dashboard
      </div>
      <div className="flex w-[100%] bg-opacity-30 px-3 py-5 flex-col items-center justify-center md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        <div className="ml-0 px-2 py-2 flex flex-col justify-between items-center md:ml-10 w-[22%] min-w-fit">
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
            currVal={score}
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
            currVal={issuesClosed}
            totalVal={16}
            color={"#22A385"}
          />
        </div>
      </div>
    </div>
  );
}
