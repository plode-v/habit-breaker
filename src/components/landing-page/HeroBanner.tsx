'use client'
import React from 'react'
import { Button } from '../ui/button'
import Lottie from 'lottie-react'
import meditationAnimation from "../../public/meditationAnimation.json"

const HeroBanner = () => {
  return (
    <div className='h-[680px] w-full border flex bg-gradient-to-b from-purple-200 to-blue-200'>
        <div className='border flex-1 flex-col flex items-start justify-end pl-20 pb-14'>
            <div className='block font-[700] text-[64px] leading-none capitalize mb-10'>
                <h1>break the bad</h1>
                <h1>keep the good</h1>
            </div>
            <div className='pb-10'>
                <p className='text-[16px]'>Your journey to a better self starts by breaking the chains of bad habits. Let Break It be the compass guiding you to a path of positive transformation.</p>
            </div>
            <Button variant="heroBanner">get started</Button>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <Lottie animationData={meditationAnimation} className='h-[90%]' />
        </div>
    </div>
  )
}

export default HeroBanner