import React from 'react'
import ConnectButton from './ConnectButton'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { RiNotification4Line } from "react-icons/ri";
import Search from './Search';
import ProfileInfo from './ProfileInfo';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary z-10 grid grid-flow-col items-center"> 
      <div className="flex items-center w-full justify-between sm:hidden bg-green-fourth text-primary p-4">
      <div className='flex gap-x-2'>
        <RxHamburgerMenu className='bg-primary rounded-lg p-2' color='#D1F121' size={50}/>
        <Image src="/logo-mobile.svg" className="text-xl font-bold" width={100} height={50} alt=""></Image>
        </div>
        <div className='flex gap-x-2'>
            <FaSearch className='bg-primary rounded-lg p-4' color='#D1F121' size={50}/>
            <RiNotification4Line className='bg-primary rounded-lg p-4' color='#D1F121' size={50}/>
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-12 w-full px-4"> 
        <Image src="/logo-web.svg" className="text-xl font-bold col-span-2" width={180} height={70} alt=""></Image>
        <div className='col-span-4 flex items-center gap-x-2'>
        <ProfileInfo/>
        </div>
        <div className='col-span-6 flex gap-x-2 items-center justify-end'> 
            <Search/>
            <RiNotification4Line className='border border-green-fourth hover:bg-green-fourth hover:fill-black hover:cursor-pointer p-4 rounded-lg' size={50}/>
        </div>
      </div>    </header>
  )
}

export default Navbar