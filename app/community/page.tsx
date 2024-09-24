import React from 'react'
import CommunityCard from '@/components/Cards/CommunityCard';
import { IoIosPeople } from "react-icons/io";


const Dashboard = () => {
  const CrowdfundingThings= [
    {
      id: 1,
      title: 'Gadget Funding ',
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/gadget_image.svg',
      goal: 10000,
      raised: 5000,
      members: "10k",
      contribution: 100
    },
    {
      id: 2,
      title: "Men's Wear",
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/men_wear_image.svg',
      goal: 20000,
      raised: 10000,
      members: "60k",
      contribution: 3000
    },
    {
      id: 3,
      title: 'Cow Funding',
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/cow_image.svg',
      goal: 30000,
      raised: 15000,
      members: "50k",
      contribution: 10000
    },
    {
      id: 4,
      title: 'Merch Funding',
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/merch_image.svg',
      goal: 40000,
      members: "20k",
      raised: 20000,
      contribution: 10000
    },
    {
      id: 5,
      title: 'Fashion Funding',
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/fashion_image.svg',
      goal: 50000,
      members: "10k",
      raised: 25000,
      contribution: 10000
    }
  ]
  return (
    <div className=" w-full  mb-10 ">
     
       
        <div className='p-4 gap-4 flex flex-col mt-8 '>
        <h2 className=" text-sm flex items-center gap-2"> <span><IoIosPeople size={16} /></span>Your Communities</h2>
        <div className="flex gap-4 flex-wrap">
         {CrowdfundingThings.map((item, index) => (
            <CommunityCard key={index} item={item} />
          ))}
         </div>
          

        
      </div>
     
    </div>
  )
}

export default Dashboard