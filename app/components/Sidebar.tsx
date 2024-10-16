'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaThList, FaCalendarAlt } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import { LuTrophy } from "react-icons/lu";
import Image from 'next/image';

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
            <button onClick={toggleModal} className='w-fit font-Pragmatica uppercase text-xl bg-green-fourth rounded-lg text-black py-2 px-4 flex items-center gap-x-2'>
                Donate <Image src="/base.png" width={20} height={20} alt='Base' />
            </button>

            {isModalOpen && (
              <div className='fixed inset-0 flex items-center justify-center bg-opacity-50 text-center'>
                <div className='bg-primary p-8 rounded-lg text-green-fourth max-w-[400px] flex flex-col items-center gap-y-4'>
                  <h2 className='text-lg uppercase font-Pragmatica'>Support Our Mission on Base</h2>
                  <Image src="/base.png" width={50} height={50} alt='Base' className='p-2 bg-green-fourth rounded-lg' />
                  <p>Your support powers the next wave of education for artists. Donate on the Base network to keep us building bold, forward-thinking learning experiences for everyone. </p>
                  <p className='font-Pragmatica uppercase'>Choose an amount:</p>
                  <div className='flex items-center justify-center gap-4 font-Pragmatica'>
                    <button className='py-2 px-4 border border-gray-400/80 rounded-lg hover:border-green-fourth hover:bg-green-fourth hover:text-primary'>$2</button>
                    <button className='py-2 px-4 border border-gray-400/80 rounded-lg hover:border-green-fourth hover:bg-green-fourth hover:text-primary'>$5</button>
                    <button className='py-2 px-4 border border-gray-400/80 rounded-lg hover:border-green-fourth hover:bg-green-fourth hover:text-primary'>$15</button>
                    <button className='py-2 px-4 border text-gray-400/80 italic border-gray-400/80 rounded-lg hover:border-green-fourth hover:bg-green-fourth hover:text-primary uppercase'>Custom</button>
                  </div>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default Sidebar
