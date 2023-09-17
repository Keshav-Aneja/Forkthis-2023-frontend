import Image from "next/image";
import Link from "next/link";
import FAQ from "@/sections/FAQ"
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
      <div className="w-full h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-x-hidden flex flex-col justify-start mt-20 md:mt-0 md:justify-center items-center gap-10 font-gilroyBlack">
        <div className="heading text-center text-3xl md:text-7xl font-extrabold">
          Welcome To ForkThis
        </div>
        <div className="sub-heading text-center italic font-gilroyRegular text-xl font-bold">
          Git.Set.Fork!
        </div>
        <Link href="http://localhost:3001/auth/github" className="reg-button py-2 px-12 text-black bg-[#8A61FF] text-xl  rounded-xl font-bolder hover:text-[#af99ed] cursor-pointer hover:bg-[#4a18bd] transition-all duration-300">
          Sign in with Github
        </Link>
      </div>
      <FAQ></FAQ>
    </div>
  );
}
function Nav() {
  return (
    <div className="w-full h-20 flex justify-center sticky top-0 left-0">
      <div className="nav-container w-[80%] flex justify-between ">
        <div className="left flex gap-8 items-center font-gilroyBlack font-bold text-xl">
          <Image
            width={50}
            height={50}
            alt="arrowButton"
            src="/images/logo.png"
            style={{
              width: "60px",
              height: "60px",
            }}
            className="duration-300 transition-all"
          />
          <Link href="">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/Resources">Resources</Link>
        </div>
        <div className="right flex gap-8 items-center font-gilroyBlack text-xl">
          <div className="login-btn underline-offset-2 underline cursor-pointer">
            Login
          </div>
          <div className="register-btn py-2 px-6 bg-[#8A61FF] rounded-full text-black cursor-pointer hover:text-[#af99ed] hover:bg-[#4a18bd] transition-all duration-300">
            Register
          </div>
        </div>
      </div>
    </div>
  );
}
