"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

export default function CollapseCard() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const theme= {
    collapse: 'ReactCollapse--collapse  w-full transition-all duration-500',
     content: 'ReactCollapse--content w-full'
  }
  const [rotationAngle, setRotationAngle] = useState(0);

  const rotateImage = () => {
    setRotationAngle(rotationAngle + 180); 
  };


  return (
    <section className='bg-[#0A070E] flex justify-around items-center py-[5px] flex-col '> 
    <section className='bg-[#0A070E] flex justify-between items-center py-[5px] px-8 w-full'>
    <p>Sr.No</p>
      <h1>Repo Name</h1>
      <h3>Tech Stack</h3>
      <p>Issues</p>
      <div className='rounded-[60%] bg-[#3B393E] p-3 flex justify-center items-center' onClick={()=>{setIsCollapsed(!isCollapsed)}}>

        <Image width={16} height={16} alt="arrowButton" src="/dashboard/arrow.svg" onClick={rotateImage}  style={{ transform: `rotate(${rotationAngle}deg)` }} className="duration-300 transition-all"/>
      </div>
    </section>
     <Collapse isOpened={!isCollapsed} theme={
      theme
     }>

     <section className='flex flex-row justify-around'>
      
     <section className='flex flex-col w-[75%] bg-gray-500 rounded-[14px]' id='issuesContainer'>
{/*repo section header */}

<section className=' flex justify-between items-center py-[5px] px-8 w-full'>
<p>Sr.No h</p>
<h1>Repo Name h</h1>
<h3>Tech Stack h</h3>
<p>Issues h</p>
</section>

{/*repo section */}

<section className='flex flex-col w-full'>
<section className='bg-[#0A070E] flex justify-between items-center py-[5px] px-8 w-full'>
<p>Sr.No</p>
<h1>Repo Name</h1>
<h3>Tech Stack</h3>
<p>Issues</p>
</section>
<section className='bg-[#0A070E] flex justify-between items-center py-[5px] px-8 w-full'>
<p>Sr.No</p>
<h1>Repo Name</h1>
<h3>Tech Stack</h3>
<p>Issues</p>
</section>
<section className='bg-[#0A070E] flex justify-between items-center py-[5px] px-8 w-full'>
<p>Sr.No</p>
<h1>Repo Name</h1>
<h3>Tech Stack</h3>
<p>Issues</p>
</section>
<section className='bg-[#0A070E] flex justify-between items-center py-[5px] px-8 w-full'>
<p>Sr.No</p>
<h1>Repo Name</h1>
<h3>Tech Stack</h3>
<p>Issues</p>
</section>
</section>

</section>

<Image width={100} height={100} alt="a" src="/dashboard/arrow.svg"/>


     </section>
     </Collapse>

    </section>
  );
}
