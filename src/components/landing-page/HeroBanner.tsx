import React from 'react'
import { Button } from '../ui/button'

const HeroBanner = () => {
  return (
    <div className='h-[calc(50vh-60px)] w-full border flex'>
        <div className='border flex-1 flex-col flex items-start justify-end px-10 pb-14'>
            <div className='block font-[700] text-[64px] leading-none capitalize mb-10'>
                <h1>break the bad</h1>
                <h1>keep the good</h1>
            </div>
            <div className='pb-10'>
                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <Button className='bg-violet-500 text-white rounded-lg text-[16px] hover:brightness-110 capitalize'>get started</Button>
        </div>
        <div className='flex-1'>
            *animation here*
        </div>
    </div>
  )
}

export default HeroBanner