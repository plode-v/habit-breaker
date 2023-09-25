'use client'
import React, { useState, useEffect } from 'react'

const DashboardRight = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return () => {
      clearInterval(timerID)
    }
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  }

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date().getDate()
  const month = monthNames[new Date().getMonth()]
  const year = new Date().getFullYear()

  return (
    <div className='flex-1 h-full pt-[100px]'>
      <div className='w-min'>
        <div className='font-dela'>
          <p className='text-[6rem] leading-none'>{date}</p>
          <p className='text-right text-[2.5rem] m-0 uppercase'>{month}</p>
          <p className='text-right leading-none m-0'>{year}</p>
        </div>
        <p className='mt-[50px] text-[1.5rem] font-[500] text-right'>{currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  )
}

export default DashboardRight