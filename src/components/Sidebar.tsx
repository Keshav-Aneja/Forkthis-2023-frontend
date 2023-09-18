"use client";

import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
// import Resources from "../app/resources/page";
import Image from "next/image";
export default function Sidebarrr() {
  const [menuOpened, setMenuOpened] = useState(true);

  const toggleMenu = () => {
    setMenuOpened((prevMenuOpened) => !prevMenuOpened);
  };

  return (
    <div
      className={`mainNav ${
        menuOpened ? "bg-[#212426] duration-0" : "bg-[rgba(0,0,0,0)"
      } md:bg-[#212426] fixed w-[100%] rounded-br-2xl rounded-bl-2xl h-12 p-2 ${
        menuOpened ? "h-fit pb-5 p-2" : ""
      } md:h-16 md:flex md:items-center md:justify-center md:text-lg lg:rounded-br-2xl lg:h-screen lg:w-[7%]
       lg:rounded-tr-2xl lg:rounded-bl-none lg:p-0 lg:hover:w-[8%] duration-300 ease-linear z-50 lg:fixed`}
    >
      <div className="icon md:hidden p-2 px-5" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="40" height="35">
          <rect width="100" height="5" rx="8" fill="#C2C2C2"></rect>
          <rect y="30" width="100" height="5" rx="8" fill="#C2C2C2"></rect>
          <rect y="60" width="100" height="5" rx="8" fill="#C2C2C2"></rect>
        </svg>
      </div>
      <div
        className={`nav justify-center items-center ${
          menuOpened ? "flex" : "hidden"
        } md:flex flex-col gap-5 lg:flex md:flex-row md:justify-around md:w-[100%] md:items-baseline lg:flex-col lg:text-xs lg:h-[100%] lg:gap-0`}
      >
        {" "}
        <Link
          href="/"
          className="w-full md:w-[30%] lg:w-full flex justify-center gap-5 items-center md:justify-center md:gap-2 lg:flex-col lg:h-[33.3%]  lg:hover:bg-black  lg:hover:text-sm duration-300"
        >
          <div className="home w-[90%] flex justify-between gap-5 items-center md:justify-center md:w-max md:gap-2 lg:flex-col lg:py-12 lg:gap-3 lg:w-[100%] lg:h-[30%] lg:hover:bg-black lg:px-5  lg:hover:text-sm duration-300">
            <Image
              className="md:w-[1.5rem] lg:w-[2.2rem]"
              src="/dashboard/userIcon.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <span className="font-gilroyRegular font-bold w-[45%] md:w-full text-center">
              Home
            </span>{" "}
          </div>{" "}
        </Link>
        <div
          className="w-full h-1 sm:hidden lg:block p-0 m-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(33,36,38,1) 0%, rgba(71,74,76,1) 35%, rgba(84,87,89,1) 50%, rgba(71,74,76,1) 65%, rgba(33,36,38,1) 100%)",
          }}
        ></div>
        <div className="w-[90%] badges flex flex-col gap-5 md:flex-row lg:flex-col lg:gap-0 lg:w-[100%] lg:text-xs lg:h-[70%]">
          <Link
            href="/leaderboard"
            className="w-full lg:w-full flex justify-center gap-5 items-center md:justify-center md:gap-2 lg:flex-col lg:h-[33.3%]  lg:hover:bg-black  lg:hover:text-sm duration-300"
          >
            <div className="w-full flex justify-between gap-5 items-center md:justify-center md:gap-2 lg:flex-col lg:h-[33.3%]  lg:hover:bg-black  lg:hover:text-sm  duration-300">
              <Image
                className="md:w-[1.5rem] lg:w-[2.2rem]"
                src="/dashboard/awardIcon.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <span className="font-gilroyRegular w-[45%] font-bold text-center md:w-full">
                Leaderboard
              </span>
            </div>
          </Link>
          <Link
            href="/dashboard"
            className="w-full lg:w-full flex justify-center gap-5 items-center md:justify-center md:gap-2 lg:flex-col lg:h-[33.3%]  lg:hover:bg-black  lg:hover:text-sm duration-300"
          >
            <div className="w-full flex justify-between gap-5 items-center md:justify-center md:gap-2 lg:flex-col lg:h-[33.3%]  lg:hover:bg-black  lg:hover:text-sm  duration-300">
              <Image
                className="md:w-[1.5rem] lg:w-[2.2rem]"
                src="/dashboard/awardIcon.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <span className="font-gilroyRegular font-bold w-[45%] md:w-full text-center">
                Dashboard
              </span>
            </div>
          </Link>
          <Link
            href="/resources"
            className="w-full flex justify-between gap-5 items-center md:justify-center md:gap-2 lg:flex-col lg:h-[33.3%]  lg:hover:bg-black  lg:hover:text-sm duration-300"
          >
            <Image
              className="md:w-[1.5rem] lg:w-[2.2rem]"
              src="/dashboard/awardIcon.png"
              width={50}
              height={50}
              alt="Picture not shown"
            />

            <span className="font-gilroyRegular font-bold w-[45%] md:w-full text-center">
              Resources
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
