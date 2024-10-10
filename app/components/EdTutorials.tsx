import React from 'react'
import ContentEmbed from './ContentEmbed'

const EdTutorials = () => {
  return (
    <div className='w-full text-green-fourth lg:mx-8'>
        <h5 className='uppercase pragmatica-text text-xl lg:text-4xl mb-4'>Top Picks for You</h5>
        <div className='flex w-full justify-between'>
            <ContentEmbed/>
            <ContentEmbed/>
            <ContentEmbed/>
        </div>
    </div>
  )
}

export default EdTutorials