import React from 'react'

interface Children {
  animation: string
  feature: string
  description: string
}


const FeatureComponent = ({ animation, feature, description }: Children ) => {
  return (
    <div className='h-full w-1/2 flex flex-col items-center'>
      <div className='h-1/2 w-full flex items-center pt-20 justify-center'>
        <div className='h-[120px] w-[120px] border rounded-full justify-center flex items-center'>
          {animation}
        </div>
      </div>
      <div className='px-20 text-center flex flex-col h-1/2'>
        <p className='font-[600] capitalize text-[20px] py-5'>{feature}</p>
        <p className='leading-snug'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureComponent