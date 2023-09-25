import React from 'react'

const DashboardCenter = () => {

  return (
    <div className='flex-[6] border h-screen flex flex-col items-center pt-[200px]'>
        <div className='w-full flex flex-col px-10'>
            <div className='flex justify-start'>
                <h1 className='font-[600] text-[4rem] leading-none font-dela uppercase'>dashboard</h1>
            </div>
            <div className='text-[3rem] leading-none'>
                date adjustment
            </div>
            <div className='flex w-full justify-between h-[80px]'>
                <div className='border'>
                    Date
                </div>
                <div className='border'>
                    View Options
                </div>
            </div>
            <div className='border w-full h-[500px]'>
                chart
            </div>
        </div>
    </div>
  )
}

export default DashboardCenter