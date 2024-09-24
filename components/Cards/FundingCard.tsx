import React from 'react'
import Link from 'next/link'

interface FundingCardProps {
  item: {
    id: number;
    title: string;
    image: string;
  };
}

const FundingCard: React.FC<FundingCardProps> = ({ item }) => {
  return (
    <Link href={`/community/${item.id}`} className='h-auto sm:h-[120px] w-auto sm:w-[120px] rounded relative shadow'>
      <img src={item.image} alt={item.title} width={100} height={100} className='rounded-sm' />
      <p className='text-xxs sm:text-sm absolute bottom-0 p-1 text-center w-full bg-fayhr-gray rounded-b-sm whitespace-nowrap'>{item.title}</p>
    </Link>
  );
};

export default FundingCard;