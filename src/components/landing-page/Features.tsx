import React from 'react'
import FeatureComponent from './FeatureComponent'

const Features = () => {
  return (
    <div className='h-[700px] border flex flex-col items-center pb-10 pt-5 bg-neutral-50'>
        <div className='h-1/2 w-full flex flex-col justify-center items-center'>
            <h1 className='text-[26px] font-[700] capitalize pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <p className='text-[14px] text-neutral-500 w-1/2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
        <div className='h-full w-full flex justify-evenly'>
            <FeatureComponent 
                animation="lottie"
                feature='specific feature 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
            <FeatureComponent 
                animation="lottie"
                feature='specific feature 2'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
            <FeatureComponent 
                animation="lottie"
                feature='specific feature 3'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />

        </div>
    </div>
  )
}

export default Features