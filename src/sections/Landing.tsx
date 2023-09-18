"use client";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/sections/FAQ";
import { useState } from "react";
export default function Landing() {
  return (
    <div className=" w-full overflow-x-hidden">
      <div className="circle-bg absolute overflow-hidden w-full h-[100vh] -z-10">
        <div
          className="circle w-[200vw] h-[200vw] lg:w-[150vw] lg:h-[150vw] border-[50px] md:border-[80px] border-[#4a18bd] rounded-full relative 
        top-[-65vw] md:top-[-105vw] left-[-50vw] lg:left-[-25vw] blur-xl"
        ></div>
        <div
          className="circle w-[200vw] h-[200vw] lg:w-[150vw] lg:h-[150vw] border-[25px] md:border-[40px] border-[#8A61FF] rounded-full absolute 
          top-[-64vw] md:top-[-104vw] left-[-50vw] lg:left-[-25vw] blur-xl"
        ></div>
      </div>
      <Nav></Nav>
      <div className="w-full h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-x-hidden flex flex-col justify-start mt-44 md:mt-0 md:justify-center items-center gap-10 font-gilroyBlack">
        <div className="heading text-center text-3xl md:text-7xl font-extrabold">
          Welcome To ForkThis
        </div>
        <div className="sub-heading text-center italic font-gilroyRegular text-xl font-bold">
          Git.Set.Fork!
        </div>
        <Link
          href="http://localhost:3001/auth/github"
          className="reg-button py-2 px-12 text-black bg-[#8A61FF] text-xl  rounded-xl font-bolder hover:text-[#af99ed] cursor-pointer hover:bg-[#4a18bd] transition-all duration-300"
        >
          Sign in with Github
        </Link>
      </div>
      <FAQ></FAQ>
    </div>
  );
}
function Nav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="ham-icon w-full h-20 flex justify-center absolute top-0 left-0 z-120">
      <div
        className={`icon sticky top-0 md:hidden p-6 px-5 flex justify-between w-full items-center ${
          isOpen ? "bg-[#1C1333]" : "bg-black"
        }`}
      >
        <svg
          viewBox="0 0 100 80"
          width="40"
          height="35"
          onClick={() => setIsOpen(!isOpen)}
        >
          <rect width="100" height="5" rx="8" fill="#C2C2C2"></rect>
          <rect y="30" width="100" height="5" rx="8" fill="#C2C2C2"></rect>
          <rect y="60" width="100" height="5" rx="8" fill="#C2C2C2"></rect>
        </svg>
        <Image
          width={50}
          height={50}
          alt="arrowButton"
          src="/images/forkthis-logo.svg"
          style={{
            width: "60px",
            height: "60px",
          }}
          className="duration-300 transition-all"
        />
      </div>
      <div
        className={`nav-container absolute top-20 md:top-0 md:relative w-[100%] md:w-[80%] flex flex-col md:flex-row justify-between z-100 ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <div className="left flex bg-[#1C1333] md:bg-transparent flex-col md:flex-row gap-8 items-start px-12 py-8 md:py-0 md:px-0 md:items-center font-gilroyBlack font-bold text-3xl md:text-xl rounded-b-3xl">
          <Image
            width={50}
            height={50}
            alt="arrowButton"
            src="/images/forkthis-logo.svg"
            style={{
              width: "60px",
              height: "60px",
            }}
            className="hidden md:block duration-300 transition-all"
          />
          <Link href="">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/resources" className="md:hidden">
            Resources
          </Link>
        </div>
        <div className="right hidden md:flex gap-8 items-center font-gilroyBlack text-xl">
          <div className="register-btn py-2 px-6 bg-transparent text-[#af99ed] border-[#af99ed] border-2 rounded-full cursor-pointer hover:text-[#af99ed] hover:bg-[#4a18bd] hover:border-[#4a18bd]  transition-all duration-300">
            Resources
          </div>
        </div>
      </div>
    </div>
  );
}
