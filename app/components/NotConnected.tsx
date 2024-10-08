import React from 'react'
import ConnectButton from './ConnectButton'

const NotConnected = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center pragmatica-text font-semibold h-screen text-4xl gap-y-4'>
        <p className='w-fit max-w-[600px] text-center'>CONNECT YOUR WALLET TO ACCESS THE <strong>LEARNHUB</strong></p>
        <ConnectButton/>
    </div>
  )
}

export default NotConnected