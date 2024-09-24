import React from 'react'
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";
import PostCard from '@/components/Cards/PostCard';
import { IoArrowUpSharp, IoArrowDownSharp } from "react-icons/io5";

const CommunityPage = () => {
    const Topics= [
        {
            id: 1,
            title: 'Gadget Funding ',
            description: 'What do you guys think about buying this cloth set? It’s so nice. Please vote your opinions.',
            time: '1hr ago',
            image: '@/Images/dashboard/crowdfund_item.svg',
            icons: {
                up:{
                    icon:<IoArrowUpSharp />,
                    count: 20
                },
                down:{
                    icon:<IoArrowDownSharp />,
                    count: 20
                },
                chat: {
                    icon:<IoChatboxOutline />,
                    count: 20
                },
                share: {
                    icon:<FaRegShareFromSquare />,
                    url: ""
                }
            }
        },
        {
            id: 2,
            title: "Men's Wear",
            description: 'What do you guys think about buying this cloth set? It’s so nice. Please vote your opinions.',
            time: '2hr ago',
            image: '@/Images/dashboard/crowdfund_item.svg',
            icons: {
                up:{
                    icon:<IoArrowUpSharp />,
                    count: 20
                },
                down:{
                    icon:<IoArrowDownSharp />,
                    count: 20
                },
                chat: {
                    icon:<IoChatboxOutline />,
                    count: 20
                },
                share: {
                    icon:<FaRegShareFromSquare />,
                    url: ""
                }
            }

        },{
            id: 3,
            title: 'Cow Funding',
            description: 'What do you guys think about buying this cloth set? It’s so nice. Please vote your opinions.',
            time: '5hr ago',
            image: '@/Images/dashboard/crowdfund_item.svg',
            icons: {
                up:{
                    icon:<IoArrowUpSharp />,
                    count: 20
                },
                down:{
                    icon:<IoArrowDownSharp />,
                    count: 20
                },
                chat: {
                    icon:<IoChatboxOutline />,
                    count: 20
                },
                share: {
                    icon:<FaRegShareFromSquare />,
                    url: ""
                }
            }
        }
    ]
  return (
    <div className=" w-full h-full  mb-10 flex flex-col md:flex-row justify-between gap-4 ">
         {Topics.map((item, index) => (
            <PostCard key={index} item={item} />
          ))}
       
</div>
  )
}

export default CommunityPage