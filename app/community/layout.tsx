import type { Metadata } from "next";
import Link from "next/link";
import FundingCard from "@/components/Cards/FundingCard";
import { PiHouseLineThin } from "react-icons/pi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import { CrowdfundingThings } from "@/utils/constants";




export const metadata: Metadata = {
  title: "Fayhr: A Decentralized Cooperative-As-A-Service Protocol",
  description:"Fayhr is a pioneering protocol designed to empower decentralized cooperatives by offering a comprehensive Cooperative-as-a-Service (CaaS) solution. Built on blockchain technology, Fayhr enables communities and organizations to collaboratively manage resources, decision-making, and governance through transparent, trustless, and automated processes. The protocol supports the creation, management, and growth of cooperatives, leveraging smart contracts to facilitate equitable participation and reward distribution among members.",
  keywords:"Decentralized Cooperative, Cooperative-as-a-Service (CaaS), Blockchain Protocol, Smart Contracts, Decentralized Governance, Resource Management, Community Empowerment, Fayhr Protocol"
};

interface PostCardProps {
    item: {
        id: number;
      title: string;
      time: string;
      description: string;
      icons: any;
    };
  }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="scrollbar-hide w-screen h-screen flex flex-col md:flex-col overflow-hidden">
         <div className='h-auto overflow-y-auto '>

        <Navbar />
      <div className="p-4 border-y-[2px] gap-4 flex flex-col border-y-fayhr-gray">
         <h2 className="text-fayhr-blue text-sm sm:text-base header-style">CrowdFunding Communities</h2>
         <div className="flex gap-2 sm:gap-4 w-full overflow-x-auto">
         {CrowdfundingThings.map((item, index) => (
            <FundingCard key={index} item={item} />
          ))}
         </div>
          
        </div>
        <div className='flex-1 pb-10 md:pb-0 overflow-y-auto'>
             {children}
        </div>
        <div className="fixed bottom-0 sm:hidden bg-fayhr-gray p-4 flex justify-between w-full">
        <Link href="/" ><PiHouseLineThin size={20} /></Link>
        <Link href="/community"  ><FaUsers size={20} /></Link>
        <Link href="#" ><HiCurrencyDollar size={20} /></Link>
        <Link href="#"  ><IoWalletOutline size={20} /></Link>
        <Link href="#"  ><FaUserCircle size={20} /></Link>
      </div>
        
      </div>
    </main>    

  );
}





