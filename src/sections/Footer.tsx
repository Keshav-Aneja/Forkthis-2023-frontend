import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id = "footer" className="flex justify-between items-center flex-col w-full  gap-[1.5rem] text-gray-300 bg-[#8A61FF33] px-[1rem] py-[2rem] mt-16">
      {/* add  logo here */}
      <div className="flex justify-center items-center w-[12%] gap-[1.4rem]">
        <Image width={60} height={60} src="/images/forkthis.svg" alt="Logo" />
        <h1 className="font-gilroyBlack text-4xl text-center">ForkThis</h1>
      </div>

      <div className="flex  w-[30%] text-xl justify-center items-center font-gilroyRegular gap-[1.4rem]">
        <Link href = "https://twitter.com/csivitu" className="hover:text-[#8A61FF] hover:underline transition-colors duration-500" >Twitter</Link>
        <Link href = "https://www.instagram.com/csivitu/" className="hover:text-[#8A61FF] hover:underline transition-colors duration-500" >Instagram</Link>
        <Link href = "https://www.linkedin.com/company/csivitu" className="hover:text-[#8A61FF] hover:underline transition-colors duration-500">Linkedin</Link>
        <Link href = "https://csivit.com/" className="hover:text-[#8A61FF] hover:underline transition-colors duration-500 whitespace-nowrap" >About CSI</Link>
      </div>
      <div className="flex  w-[30%] text-xl justify-between items-center font-gilroyRegular"></div>

      {/* <div className="flex justify-between items-center">
        <Image width={32} height={32} src="/images/1.svg" alt="Logo" />
        <Image width={32} height={32} src="/images/2.svg" alt="Logo" />
        <Image width={32} height={32} src="/images/3.svg" alt="Logo" />
        <Image width={32} height={32} src="/images/4.svg" alt="Logo" />
      </div> */}
      <p>Made with ❤️ by CSI</p>
    </footer>
  );
}
