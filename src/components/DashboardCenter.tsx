import React from 'react'

const DashboardCenter = () => {

  return (
    <div className='flex-[6] border flex flex-col items-center justify-center'>
        <div className='w-full flex flex-col px-10'>
            <div className='flex justify-start'>
                <h1 className='font-[600] text-[1.5rem] lg:text-[4rem] leading-none font-dela uppercase'>dashboard</h1>
            </div>
            <div className='lg:text-[3rem] text-[1rem] leading-none'>
                date adjustment
            </div>
            <div className='flex w-full justify-between lg:h-[80px] h-[30px]'>
                <div className='border'>
                    Date
                </div>
                <div className='border'>
                    View Options
                </div>
            </div>
            <div className='border w-[500px] h-[350px]'>
                chart
            </div>
        </div>
    </div>
  )
}

export default DashboardCenter