import React from 'react'

const FeatureComponent = () => {
  return (
    <div className='border h-full w-1/4 flex flex-col items-center'>
      <div className='h-1/2 w-full flex items-center justify-center'>
        <div className='h-[120px] w-[120px] border rounded-full justify-center flex items-center'>
          *lottie
        </div>
      </div>
      <div className='px-8 text-center flex flex-col h-1/2'>
        <p className='font-[600] capitalize text-[20px] py-5'>specific feature</p>
        <p className='leading-snug'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  )
}

export default FeatureComponent