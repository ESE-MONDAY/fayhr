import React from 'react';
import Link from 'next/link';

interface CommunityCardProps {
  item: {
    id: number;
    title: string;
    image: string;
    description: string;
    members: string;
    contribution: number;
  };
}

const CommunityCard: React.FC<CommunityCardProps> = ({ item }) => {
  return (
    <div className='h-auto w-full sm:w-[380px] rounded shadow grid grid-cols-3 hover:shadow-md'>
      <div className='col-span-1'>
        <img src={item.image} alt={item.title} width="100%" height="100%" />
      </div>
      <div className='col-span-2 h-full bg-fayhr-gray flex p-1 flex-col gap-1'>
        <p className='sm:text-sm text-xs font-poppins font-semibold sm:font-bold p-1 rounded-b'>
          <Link href={`/community/${item.id}`}>{item.title}</Link> . <span className='text-fayhr-blue text-sm'>{item.members} members</span></p>
        <p className='text-xxs sm:text-xs p-1 text-justify rounded-b'>{item.description}</p>
        <p className='text-xs sm:text-sm font-semibold p-1 rounded-b'>{item.contribution} Contributions</p>
      </div>
    </div>
  );
};

export default CommunityCard;