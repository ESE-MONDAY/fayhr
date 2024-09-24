import React from 'react';
import { BsThreeDots } from "react-icons/bs";

interface PostCardProps {
  item: {
    title: string;
    time: string;
    description: string;
    icons:any
  };
}

const PostCard: React.FC<PostCardProps> = ({ item }) => {
  return (
    <div>
      <div className='px-2 py-1 flex justify-between gap-4'>
        <img alt="user avatar" src="/Images/dashboard/user_avatar.svg" />
        <div className='gap-1 flex flex-col'>
          <p className='flex items-center gap-1 text-xs '>{item.title} .   <span className='text-fayhr-blue text-xs'>{item.time}</span></p>
          <p className=' text-xxs '>{item.description} </p>
        </div>
        <button><BsThreeDots /></button>
      </div>
      <img alt="post image" src="/Images/dashboard/crowdfund_item.svg" />
      <div className='px-4 py-2 flex gap-2'>
        <span className='bg-fayhr-gray p-1 rounded-sm shadow-sm flex justify-center items-center text-xs gap-1'>
          {item.icons.up.icon} {item.icons.up.count}
        </span>
        <span className='bg-fayhr-gray p-1 rounded-sm shadow-sm flex justify-center items-center text-xs gap-1'>
          {item.icons.down.icon} {item.icons.down.count}
        </span>
        <span className='bg-fayhr-gray py-1 px-2 rounded-sm shadow-sm flex justify-center items-center text-xs gap-1'>
          {item.icons.share.icon}
        </span>
      </div>
    </div>
  );
};

export default PostCard;