import React from 'react'
import FeatureComponent from './FeatureComponent'

const Features = () => {
  return (
    <div className='h-[50vh] border flex flex-col items-center pb-10 pt-5'>
        <div className='h-1/4 w-full flex flex-col justify-center items-center leading-relaxed'>
            <h1 className='text-[26px] font-[700] capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
        <FeatureComponent />
    </div>
  )
}

export default Features