export default function Sidebar() {
  return (
    <div className=" bg-[#212426] h-screen w-[6%] rounded-tr-2xl rounded-br-2xl hover:w-[8%] duration-300 ease-linear text-xs hover:text-sm">
      <div className="home flex flex-col justify-center items-center py-12 gap-3 hover:bg-black duration-300 px-2">
        <svg
          width="2.5rem"
          height="auto"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.9892 38.2934C37.7859 34.7852 34.7345 32 31 32H17C13.2655 32 10.2141 34.7852 10.0108 38.2934M37.9892 38.2934C41.6983 34.6628 44 29.6002 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 29.6002 6.30174 34.6628 10.0108 38.2934M37.9892 38.2934C34.3827 41.8237 29.4455 44 24 44C18.5545 44 13.6173 41.8237 10.0108 38.2934M30 20C30 23.3137 27.3137 26 24 26C20.6863 26 18 23.3137 18 20C18 16.6863 20.6863 14 24 14C27.3137 14 30 16.6863 30 20Z"
            stroke="#C2C2C2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="font-gilroyRegular font-bold">Home</span>
      </div>
      <div
        className="w-full h-1"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(33,36,38,1) 0%, rgba(71,74,76,1) 35%, rgba(84,87,89,1) 50%, rgba(71,74,76,1) 65%, rgba(33,36,38,1) 100%)",
        }}
      ></div>
      <div className="badges flex flex-col justify-start items-center h-[70%] ">
        <div className="w-full flex flex-col items-center justify-center gap-3 h-[33.3%]  hover:bg-[black] duration-300 px-2">
          <svg
            width="2.5rem"
            height="auto"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.97 28.3112C36.7547 25.7523 38.5 22.08 38.5 18C38.5 10.268 32.232 4 24.5 4C16.768 4 10.5 10.268 10.5 18C10.5 22.3271 12.4631 26.1957 15.5473 28.7637M33.97 28.3112C31.4774 30.6017 28.152 32 24.5 32C21.0951 32 17.9741 30.7845 15.5473 28.7637M33.97 28.3112L37.5 44L36.7828 43.5586C29.2967 38.9518 19.8138 39.1242 12.5 44L15.5473 28.7637"
              stroke="#C2C2C2"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="font-gilroyRegular font-bold text-center">
            Leaderboard
          </span>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-3 h-[33.3%]  hover:bg-black duration-300 px-2">
          <svg
            width="2.5rem"
            height="auto"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.97 28.3112C36.7547 25.7523 38.5 22.08 38.5 18C38.5 10.268 32.232 4 24.5 4C16.768 4 10.5 10.268 10.5 18C10.5 22.3271 12.4631 26.1957 15.5473 28.7637M33.97 28.3112C31.4774 30.6017 28.152 32 24.5 32C21.0951 32 17.9741 30.7845 15.5473 28.7637M33.97 28.3112L37.5 44L36.7828 43.5586C29.2967 38.9518 19.8138 39.1242 12.5 44L15.5473 28.7637"
              stroke="#C2C2C2"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="font-gilroyRegular font-bold  text-center">
            Dashboard
          </span>
        </div>
        <div className="w-full flex flex-col items-center justify-center  gap-3 h-[33.3%]  hover:bg-black duration-300 px-2">
          <svg
            width="2.5rem"
            height="auto"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.97 28.3112C36.7547 25.7523 38.5 22.08 38.5 18C38.5 10.268 32.232 4 24.5 4C16.768 4 10.5 10.268 10.5 18C10.5 22.3271 12.4631 26.1957 15.5473 28.7637M33.97 28.3112C31.4774 30.6017 28.152 32 24.5 32C21.0951 32 17.9741 30.7845 15.5473 28.7637M33.97 28.3112L37.5 44L36.7828 43.5586C29.2967 38.9518 19.8138 39.1242 12.5 44L15.5473 28.7637"
              stroke="#C2C2C2"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="font-gilroyRegular font-bold  text-center">
            Resources
          </span>
        </div>
      </div>
    </div>
  );
}
