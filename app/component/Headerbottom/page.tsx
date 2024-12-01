import React from 'react'
import Image from 'next/image'
const Headerbottom = ()=>{
return(
    <div className='bg-[#F7F7F7] text-black py-4 px-8 mt-4'>
        <header>
        <div className='flex'>
         <div className='pl-8 pr-60 mt-2'>
            <Image 
              src="/image/Ddsgnr Library.png"
              alt="image"
              width={140}
              height={50}>
            </Image>
         </div>
         <div className='bg-white p-4 items-center '>
            <ul className='flex space-x-16 Font-Roboto'>
                <li>Home</li>
                <li>Courses</li>
                <li>Services</li>
                <li>Achievement</li>
                <li>About Us</li>
                <li>Testimorial</li>
            </ul>
         </div>
         <div className='mt-2'>
         <button className='ml-5 border-2 border-black py-2 px-5 rounded-md font-bold Font-Roboto'>Login</button>
         <button className='bg-black text-white ml-6 py-2 px-5 rounded-md Font-Roboto'>Sign Up</button>
         </div>
        </div>
        </header>
    </div>
)

}
export default Headerbottom