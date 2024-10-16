import Link from 'next/link'
import React from 'react'
import { FaThList, FaCalendarAlt } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import { LuTrophy } from "react-icons/lu";
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='hidden lg:flex flex-col justify-between lg:h-[80vh] lg:w-1/6 text-sm'>
        <div className='flex flex-col gap-y-4'>
        <Link href="/" className='p-4 border border-gray-400/80 rounded-lg hover:bg-green-fourth hover:text-black'>
            <div className='flex gap-x-2 items-center'>
                <FaThList color='#D1F121' size={30} className='bg-black p-2 rounded-lg'/> Tutorials
            </div>
        </Link>
        <Link href="/chat" className='p-4 border border-gray-400/80 rounded-lg hover:bg-green-fourth hover:text-black'>
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
        <div className='flex flex-col gap-y-2'>
            <p className='font-Pragmatica'><strong>Newtro Arts</strong> aims to promote, educate and introduce latin american artists and cultural agents to blockchain technology.</p>
            <button className='w-fit font-Pragmatica uppercase text-xl bg-green-fourth rounded-lg text-black py-2 px-4 flex items-center gap-x-2'>Donate <Image src="/base.png" width={20} height={20} alt='Base' /></button>
        </div>
    </div>
  )
}

export default Sidebar