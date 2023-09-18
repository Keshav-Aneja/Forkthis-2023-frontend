import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center flex-col w-full  gap-[1.5rem] text-gray-300 bg-[#8A61FF33] px-[1rem] py-[2rem] mt-16">
      {/* add  logo here */}
      <div className="flex justify-center items-center w-[12%] ">
        <Image width={20} height={20} src="/sampleLogo.svg" alt="Logo" />
        <h1 className="font-gilroyBlack text-4xl text-center">ForkThis</h1>
      </div>

      <div className="flex  w-[30%] text-xl justify-center items-center font-gilroyRegular">
        <p>First Link</p>
        <p>First Link</p>
        <p>First Link</p>
        <p>First Link</p>
      </div>
      <div className="flex  w-[30%] text-xl justify-between items-center font-gilroyRegular"></div>

      <div className="flex justify-between items-center">
        <Image width={32} height={32} src="/images/1.svg" alt="Logo" />
        <Image width={32} height={32} src="/images/2.svg" alt="Logo" />
        <Image width={32} height={32} src="/images/3.svg" alt="Logo" />
        <Image width={32} height={32} src="/images/4.svg" alt="Logo" />
      </div>
      <p>6423 All rights Reserved.</p>
    </footer>
  );
}
