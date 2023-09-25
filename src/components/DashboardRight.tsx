import React from 'react'
import { UserButton } from '@clerk/nextjs';

const DashboardRight = () => {

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date().getDate()
  const month = monthNames[new Date().getMonth()]
  const year = new Date().getFullYear()

  return (
    <div className='flex-1 h-full pt-[200px] relative'>
      <div className='absolute top-[20px] right-[20px]'>
        <UserButton />
      </div>
      <div className='w-min font-dela'>
        <p className='text-[6rem] leading-none'>{date}</p>
        <p className='text-right text-[2.5rem] m-0 uppercase'>{month}</p>
        <p className='text-right leading-none m-0'>{year}</p>
      </div>
    </div>
  )
}

export default DashboardRight