import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(
    Math.max(0, targetDate.getTime() - Date.now())
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeRemaining = Math.max(0, targetDate.getTime() - Date.now());
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining === 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const formatWithLeadingZero = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div className="flex-auto font-gilroyRegular ">
      {/* <div className="mb-12 text-2xl font-bold">Time left</div> */}

      <div className=" flex mt-4  text-5xl font-black">
        <p className="">{formatWithLeadingZero(days)}</p>
        <p className="ml-1 mr-1">:</p>
        <p className="">{formatWithLeadingZero(hours)}</p>
        <p className="ml-1 mr-1">:</p>
        <p className="">{formatWithLeadingZero(minutes)}</p>
        <p className="ml-1 mr-1">:</p>
        <p className="">{formatWithLeadingZero(seconds)}</p>
      </div>
      <div className="flex font-extrabold text-s">
        <p className="ml-2 mr-4">Days</p>
        <p className="ml-6 mr-3">Hours</p>
        <p className="ml-2 mr-3">Minutes</p>
        <p>Seconds</p>
      </div>
      <div className="mt-1 text-[#C2C2C2] text-opacity-70 text-lg font-bold ">
        Until Competition Ends
      </div>
    </div>
  );
};

export default CountdownTimer;
