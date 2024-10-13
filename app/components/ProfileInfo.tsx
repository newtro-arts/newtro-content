import React from 'react'
import Image from 'next/image'

const ProfileInfo = () => {
  return (
    <div className='w-fit flex gap-x-2 items-center'>
      <Image src="/image.png" alt="" width={100} height={50} className='rounded-lg aspect-video object-none' />
      <div className='flex flex-col'>
      <p className='pragmatica-text text-xl'>Welcome, John!</p>
      <p className='text-xs'>October 1, 2024</p>
      </div>
    </div>
  )
}

export default ProfileInfo