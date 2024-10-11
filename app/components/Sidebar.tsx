import Link from 'next/link'
import React from 'react'
import { FaThList, FaCalendarAlt } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import { LuTrophy } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className='hidden lg:flex flex-col h-screen lg:w-1/6 gap-y-4 text-sm'>
        <Link href="/" className='p-4 border border-gray-400/80 rounded-lg hover:bg-green-fourth hover:text-black'>
            <div className='flex gap-x-2 items-center'>
                <FaThList color='#D1F121' size={30} className='bg-black p-2 rounded-lg'/> Tutorials
            </div>
        </Link>
        <Link href="/" className='p-4 border border-gray-400/80 rounded-lg hover:bg-green-fourth hover:text-black'>
            <div className='flex gap-x-2 items-center'>
                <MdChatBubbleOutline color='#D1F121' size={30} className='bg-black p-2 rounded-lg'/> ChatBot
            </div>
        </Link>
        <Link href="/" className='p-4 border border-gray-400/80 rounded-lg hover:bg-green-fourth hover:text-black'>
            <div className='flex gap-x-2 items-center'>
                <FaCalendarAlt color='#D1F121' size={30} className='bg-black p-2 rounded-lg'/> My Portfolio
            </div>
        </Link>
        <Link href="/" className='p-4 border border-gray-400/80 rounded-lg hover:bg-green-fourth hover:text-black'>
            <div className='flex gap-x-2 items-center'>
                <LuTrophy color='#D1F121' size={30} className='bg-black p-2 rounded-lg'/> Rewards
            </div>
        </Link>
    </div>
  )
}

export default Sidebar