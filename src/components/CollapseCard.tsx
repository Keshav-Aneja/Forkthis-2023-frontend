"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

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
     content: 'ReactCollapse--content w-full flex justify-around items-center'
  }
  const [rotationAngle, setRotationAngle] = useState(0);

  const rotateImage = () => {
    setRotationAngle(rotationAngle + 180); 
  };


  return (
    <section className='bg-[#0A070E] flex justify-around items-center py-[5px] flex-col '>
      <section className='bg-[#0A070E] flex justify-between items-center py-[5px] px-8 w-full'>
      <section className='bg-[#0A070E] flex justify-between items-center py-[5px] px-8 w-full'>
      <p>Sr.No</p>
      <h1>Repo Name</h1>
      <h3>Tech Stack</h3>
      <p>Issues</p>
      <div className='rounded-[60%] bg-[#3B393E] p-3 flex justify-center items-center' onClick={()=>{setIsCollapsed(!isCollapsed)}}>

        <Image width={16} height={16} alt="arrowButton" src="/dashboard/arrow.svg" onClick={rotateImage}  style={{ transform: `rotate(${rotationAngle}deg)` }} className="duration-300 transition-all"/>
      </div>
    </section>

      </section>
      <Collapse isOpened={!isCollapsed} theme={theme}>
        <table className=' w-[75%] bg-gray-500 rounded-[14px]' id='issuesContainer'>
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
              <tr key={repo.srNo}>
                <td className='text-center'>{repo.srNo}</td>
                <td className='text-center'>{repo.desctiption}</td>
                <td className='text-center'>{repo.difficulty}</td>
                <td className='text-center'>{repo.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Image width={100} height={100} alt="a" src="/dashboard/arrow.svg" />
      </Collapse>
    </section>
  );
}
