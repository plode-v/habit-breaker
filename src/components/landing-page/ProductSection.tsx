import React from 'react'
import { Button } from '../ui/button'

const ProductSection = () => {
  return (
    <div className='flex w-full justify-center'>
        <div className='h-[900px] 3xl:w-1/2 w-full flex-col flex'>
            <div className='flex-1 items-center flex'>
                <div className='flex-1 h-full'>
                    img
                </div>
                <div className='flex-1 h-full justify-center items-center flex'>
                    <div className='px-10'>
                        <h1>lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <br />
                        <ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </ul>
                        <Button variant="heroBanner">Try Now</Button>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex'>
                <div className='flex-1 h-full justify-center items-center flex'>
                    <div className='px-10'>
                        <h1>lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <br />
                        <ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </ul>
                        <Button variant="heroBanner">Try Now</Button>
                    </div>
                </div>
                <div className='flex-1 h-full'>
                    img
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSection