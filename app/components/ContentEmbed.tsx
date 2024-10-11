import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContentEmbed = () => {
  return (
    <Link className='col-span-4 max-w-full lg:max-w-sm aspect-square flex flex-col items-center lg:items-start' href="/">
        <Image src="/motion-1.png" alt='Motion' width={330} height={330} className=' aspect-square rounded-md object-cover'/>
        <p className='uppercase pragmatica-text text-xl lg:text-3xl my-2'>Mastering Motion Design</p>
        <p className='text-sm'>Unlock the principles of dynamic animations and elevate your visual storytelling.</p>
        <div className='flex gap-x-2'>  
            <Image src="/motion-1.png" width={30} height={30} alt=''/>
            <div className='flex flex-col text-xs'>
                <p>Stani</p>
                <p>Feb 1, 2024</p>
            </div>
        </div>
    </Link>
  )
}

export default ContentEmbed