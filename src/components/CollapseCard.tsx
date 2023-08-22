"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

export default function CollapseCard() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <section className='bg-[#0A070E] flex justify-around items-center py-[5px] flex-col '> 
    <section className='bg-[#0A070E] flex justify-around items-center py-[5px] w-full'>
    <p>Sr.No</p>
      <h1>Repo Name</h1>
      <h3>Tech Stack</h3>
      <p>Issues</p>
      <div className='rounded-[60%] bg-[#3B393E] p-4 flex justify-center items-center' onClick={()=>{setIsCollapsed(!isCollapsed)}}>
        <Image width={24} height={24} alt="arrowBtn" src="/dashboard/arrow.svg"/>
      </div>
    </section>
     <Collapse isOpened={!isCollapsed}>
      <p>Hi</p>
     </Collapse>
    </section>
  );
}
