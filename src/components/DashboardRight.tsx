import React from 'react'
import { UserButton } from '@clerk/nextjs';

const DashboardRight = () => {

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date().getDate()
  const month = monthNames[new Date().getMonth()]
  const year = new Date().getFullYear()

  return (
    <div className='flex-1 h-full lg:pt-10 relative'>
      <div className='w-min font-dela'>
        <p className='text-[32px] lg:text-[80px] leading-none'>{date}</p>
        <p className='text-right text-[1rem] sm:text-[1.5rem] 3xl:text-[2.5rem] m-0 uppercase'>{month}</p>
        <p className='text-right text-[0.85rem] lg:text-[1rem] 3xl-[1.25rem] leading-none m-0'>{year}</p>
      </div>
    </div>
  )
}

export default DashboardRight