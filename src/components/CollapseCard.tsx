"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import ProgressCircular from './ProgressCircular';

export default function CollapseCard() {
  const arrRepo=[
  {
    srNo:1,
    desctiption:"Issue Desciption",
    difficulty:"Easy",
    points:5
  },
  {
    srNo:1,
    desctiption:"Issue Desciption",
    difficulty:"Mid",
    points:5
  },
  {
    srNo:1,
    desctiption:"Issue Desciption",
    difficulty:"Hard",
    points:5
  },
  {
    srNo:1,
    desctiption:"Issue Desciption",
    difficulty:"Hard",
    points:5
  }]

  const [isCollapsed, setIsCollapsed] = useState(true);
  const theme= {
    collapse: 'ReactCollapse--collapse  w-full transition-all duration-500',
     content: 'ReactCollapse--content w-full flex flex-col-reverse gap-4 justify-around items-center'
  }
  const [rotationAngle, setRotationAngle] = useState(0);

  const rotateImage = () => {
    setRotationAngle(rotationAngle + 180); 
  };


  return (
    <section className='bg-[#000] flex justify-around items-center py-[5px] flex-col border-gradientA'>
      <section className='bg-[#000] flex justify-between items-center py-[5px] px-8 w-full'>
      <section className='bg-[#000] flex justify-between items-center py-[5px] px-8 w-full'>
      <p>1</p>
      <h1>FFCS Planner</h1>
      <h3>Next.js MongoDB MySQL Tailwind</h3>
      <p>5</p>
      <div className='rounded-[60%] bg-[#3B393E] p-3 flex justify-center items-center' onClick={()=>{setIsCollapsed(!isCollapsed)}}>

        <Image width={16} height={16} alt="arrowButton" src="/dashboard/arrow.svg" onClick={rotateImage}  style={{ transform: `rotate(${rotationAngle}deg)` }} className="duration-300 transition-all"/>
      </div>
    </section>

      </section>
      <Collapse isOpened={!isCollapsed} theme={theme}>
        <section className='flex w-full flex-row items-center justify-between px-8'>
        <table className=' w-[75%] bg-[#212426] rounded-[14px] border-spacing-10' id='issuesContainer '>
          <thead>
            <tr >
              <th>Sr.No</th>
              <th>Description</th>
              <th>Difficulty</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody >
            {arrRepo.map((repo) => (
              <tr key={repo.srNo} className="bg-[#000] border-b-8 border-[#000]">
                <td className='text-center'>{repo.srNo}</td>
                <td className='text-center'>{repo.desctiption}</td>
                <td className='text-center'>{repo.difficulty}</td>
                <td className='text-center'>{repo.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span className="w-[2px] h-[100%] bg-gradient-to-r from-lineStopLeft via-lineStopMiddle to-lineStopRight transform"></span>
              <div >
              <ProgressCircular name='manas' currVal={20} totalVal={100} color="#ffffff"/>
              </div>
        
        </section>
       <div className='w-full h-[2px] bg-gradient-to-r from-lineStopLeft via-lineStopMiddle to-lineStopRight'></div>
      </Collapse>
    </section>
  );
}
