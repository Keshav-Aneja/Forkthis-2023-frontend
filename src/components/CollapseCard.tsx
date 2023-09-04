"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import ProgressCircular from "./ProgressCircular";

interface RepoDetails {
  srNo: number;
  repoName: string;
  techStack: string;
  issues: number;
  issuesList: Array<Object>;
}

const CollapseCard: React.FC<RepoDetails> = ({
  repoName,
  techStack,
  issues,
  issuesList,
  srNo,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const theme = {
    collapse: "ReactCollapse--collapse  w-full transition-all duration-500",
    content:
      "ReactCollapse--content w-full flex flex-col-reverse gap-4 justify-around items-center py-4",
  };
  const [rotationAngle, setRotationAngle] = useState(0);

  const rotateImage = () => {
    setRotationAngle(rotationAngle + 180);
  };

  return (
    <section className="bg-[#000] flex justify-around items-center py-[5px] flex-col border-gradientA font-gilroyRegular border-[#212426] border-b-[0.5px] w-full">
      <section className="bg-[#000] flex justify-between items-center py-[5px] px-8 w-full">
        <section className="bg-[#000] flex justify-between items-center py-[5px] px-8 w-full ">
          <p>{srNo}</p>
          <h1>{repoName}</h1>
          <h3>{techStack}</h3>
          <p>{issues}</p>

          <Image
            width={16}
            height={16}
            alt="arrowButton"
            src="/dashboard/arrow.svg"
            style={{
              transform: `rotate(${rotationAngle}deg)`,
              width: "auto",
              height: "auto",
            }}
            className="duration-300 transition-all"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              rotateImage();
            }}
          />
        </section>
      </section>
      <Collapse isOpened={!isCollapsed} theme={theme}>
        <section className="flex w-full flex-row items-center justify-between px-8">
          <table
            className=" w-[100%] bg-[#212426] rounded-[14px] border-spacing-10"
            id="issuesContainer "
          >
            <thead>
              <tr>
                <th className="py-3">Sr.No</th>
                <th>Description</th>
                <th>Difficulty</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {issuesList.map((issue: any) => (
                <tr
                  key={issue.srNo}
                  className="bg-[#000] border-y-8 border-[#000]"
                >
                  <td className="text-center">{issue.srNo}</td>
                  <td className="text-center">{issue.description}</td>
                  <td className="text-center">{issue.difficulty}</td>
                  <td className="text-center">{issue.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <span className="w-[2px] h-[100%] bg-gradient-to-r from-lineStopLeft via-lineStopMiddle to-lineStopRight transform"></span>
          <div>
            <ProgressCircular
              name="manas"
              currVal={20}
              totalVal={100}
              color="#ffffff"
            />
          </div>
        </section>
        <div className="w-full h-[2px] bg-gradient-to-r from-lineStopLeft via-lineStopMiddle to-lineStopRight"></div>
      </Collapse>
    </section>
  );
};
export default CollapseCard;
