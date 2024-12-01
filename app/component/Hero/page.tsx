import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const Hero =()=>{
    return(
        <div className='flex flex-col w-full'>
            <div className='flex justify-between'>
           <div className='flex flex-col mt-[220px] ml-[170px]'>
            <h1 className='text-6xl font-Roboto font-semibold'>Learn new skills <br />
            online with ease</h1>
            <p className='mt-10 font-bold font-Roboto ml-2'>Discover a wide range of courses covering a variety of <br />
            subjects,taught by expert instructors</p>
            <div className='flex mt-10 space-x-9 font-Roboto'>
                <Button>Start Learning now</Button>
                <Button className='bg-white text-black border-2 border-black Font-Roboto'>Explore Courses</Button>
            </div>
            </div> 
            <div className='m-0'>
                <Image 
                src="/image/9c8bd78727a1d0e4711461ee988533d0.jpeg"
                alt="image"
                width={482}
                height={80}>
                </Image>
            </div>
            </div>
        </div>
    )
}
export default Hero