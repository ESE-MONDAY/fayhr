'use client'
import React, {useEffect} from 'react'
import { useActiveWalletConnectionStatus } from 'thirdweb/react';
import WalletConnect from '@/components/Buttons/WalletConnect';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/Images/logo/Fayhr_logo.svg';
import CommunityCard from '@/components/Cards/CommunityCard';
import { CrowdfundingThings } from '@/utils/constants';
import { SiGitbook } from "react-icons/si";
import { FaGithub,FaDiscord } from "react-icons/fa";
import heroImage from '@/public/Images/dashboard/hero_image.jpg';


const Home = () => {
	const connectionStatus = useActiveWalletConnectionStatus();
 

  useEffect(() => {
    if (connectionStatus === 'connected') {
    
      window.location.replace('/community');
    }
  }, [connectionStatus]);

  
  return (
    <main className='h-screen w-screen '>
      <div className='w-full flex justify-between p-2'>
        <Image src={Logo} alt="Fayhr Logo" />
        </div>
  <div className='h-auto grid grid-cols-1 sm:grid-cols-2  max-h-[300px]'>
          <div className='col-span-1 p-8 flex flex-col gap-4'>
                <h1 className='text-3xl font-bold '>Welcome to Fayhr</h1>
                <p className=''>A Decentralized Cooperative as a service</p>
                <WalletConnect title="Connect Wallet" />
          </div>
          <div className='col-span-1  max-h-[300px] hidden md:flex'>
            <Image src={heroImage} alt="Fayhr Hero Image" height={100} width={100}  objectFit='contain' loading='lazy' className='w-full h-auto'/>
          </div>
          
        </div>
        <div className='bg-fayhr-blue justify-center text-white text-sm font-bold text-center p-4'>Beyond Off-Chain Crowdfunding</div>
        <div className='p-8 flex flex-col gap-8'>
          <h3 className='font-bold text-sm text-fayhr-blue'>The Fayhr Advantage</h3>
          <div className="flex gap-6  flex-wrap">
         {CrowdfundingThings.map((item, index) => (
            <CommunityCard key={index} item={item} />
          ))}
         </div>
         

        </div>
        <div className='p-8 flex flex-col gap-8'>
          <h3 className='font-bold text-sm text-fayhr-blue'>Discover Cooperatives</h3>
          <div className="flex gap-6  flex-wrap">
         {CrowdfundingThings.map((item, index) => (
            <CommunityCard key={index} item={item} />
          ))}
         </div>
         

        </div>
        <div className='h-[200px] flex justify-center items-center text-white bg-fayhr-blue'>
          Join A Cooperative Close to you
        </div>
        <footer className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full sm:px-16 p-8 border-t-[1px] border-t-fayhr-blue'>
          <div className='col-span-1 flex flex-col gap-4'>
            <Image src={Logo} alt="Fayhr Logo" />
            
            <p className='text-xs font-medium max-w-[200px]'>Welcome to Fayhr, the world&apos;s first Decentralized Cooperative-As-A-Service protocol.</p>
            <p className='text-xs font-medium '>copyright 2021 Fayhr. All rights reserved.
                </p>
          </div>
          <div className='col-span-1 flex justify-between'>
              <div className='flex flex-col gap-4 w-full'>
                <h3 className='font-bold text-sm text-fayhr-blue'>About</h3>
                <div className='flex flex-col gap-2'>
                 <Link href="#" className='text-xs font-medium '>Terms of Service</Link>
                 <Link href="#" className='text-xs font-medium '>Privacy Policy</Link>
                 <Link href="#" className='text-xs font-medium '>Community Guidelines</Link>

                </div>
                
                
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='font-bold text-sm text-fayhr-blue'>Platform</h3>
                <p className='text-xs'>Our vision is to provide a decentralized cooperative as a service</p>
                </div>
          </div>
          <div className='col-span-1 justify-center sm:text-end text-center flex flex-col gap-4'>
            <h3 className='font-bold text-sm text-fayhr-blue mt-4'> Read more about us:</h3>
            <div className="flex gap-4 justify-center sm:justify-end">
              <Link href="https://fayhr.gitbook.io/fayhr-paper/introduction"><SiGitbook /></Link>
              <Link href="https://fayhr.gitbook.io/fayhr-paper/introduction"><FaGithub /></Link>
              <Link href="https://fayhr.gitbook.io/fayhr-paper/introduction"><FaDiscord /></Link>

            </div>
           
          </div>

        </footer>

      
    </main>
  )
}

export default Home