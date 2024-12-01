import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className='flex flex-col gap-[90px] h[670px] w[1260px]  p-[90px]'>
      <div className="flex flex-col gap-[90px] w[1120px] h[52px]">
        <div className="w[1120px] h[82px] flex lg:flex-row flex-col items-start gap-3 justify-between">
            <div className="w-[500px] h-[51px]">
                <p className="text-[18px] leading-[29px] font-semibold">Subscribe to our newsletter</p>
                <p className="text-[16px] leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col gap-[17px] w-[400px] h[85px] ">
            <div className='h-[48px] flex w-[400px] gap-[16px] '>
                    <input className='h-[48px] w-[256px] border-solid border-black border-[1px] rounded-[5px] p-3 placeholder-[#505050]' placeholder='Enter your email' type="text" />
                    <button className='w-[119px] h-[48px] text-[16px] leading-[24px] border-solid rounded-[5px] border-black border-[1px]'>Subscribe</button>
                </div>
                <p className='text-[12px] leading-[18px]'>By subscribing you agree to with our <Link className='underline' href="/">Privacy Policy</Link></p>
            </div>
        </div>
        <div className="w[1120px] h[225px] flex gap-2 justify-between ">
            <div className="w-[250px] h-[40px]">
            <Image src="/image/Ddsgnr Library.png" alt="" width={150} height={100} /></div>
            <div className="w-[250px] h-[226px] flex flex-col gap-[16px]">
                <h1 className="text-[17px] leading-[24px] font-semibold">Courses</h1>
                <p className="text-[14px] leading-[21px]">Business</p>
                <p className="text-[14px] leading-[21px]">Development</p>
                <p className="text-[15px] leading-[21px]">Technology</p>
                <p className="text-[15px] leading-[21px]">Design</p>
                <p className="text-[15px] leading-[21px]">Programming</p>
            </div>
            <div className="w-[250px] h-[226px] flex flex-col gap-[16px]">
                <h1 className="text-[17px] leading-[24px] font-semibold">Resources</h1>
                <p className="text-[14px] leading-[21px]">Career</p>
                <p className="text-[14px] leading-[21px]">Resume</p>
                <p className="text-[14px] leading-[21px]">Learning</p>
                <p className="text-[14px] leading-[21px]">Interview Preparation</p>
                <p className="text-[14px] leading-[21px]">Jobs</p>
            </div>
            <div className="w-[250px] h-[226px] flex flex-col gap-[16px]">
                <h1 className="text-[17px] leading-[24px] font-semibold">About Us</h1>
                <p className="text-[14px] leading-[21px]">Contact</p>
                <p className="text-[14px] leading-[21px]">Help/Support</p>
                <p className="text-[14px] leading-[21px]">FAQ</p>
                <p className="text-[14px] leading-[21px]">Terms and Conditions</p>
                <p className="text-[14px] leading-[21px]">Partners</p>
            </div>
        </div>
        <div className="w[1120px] h-[57px] items-end border-solid border-black border-t-[2px] pt-[33px]">
            <div className="h-[24px] flex justify-between items-center">
                <div className="flex gap-[23px] h-[21px] ">
                    <p className='text-[14px] leading-[22px]'>2023 Ddsgnr. All right reserved.</p>
                    <Link className='text-[15px] leading-[22px] underline' href="">Privacy Policy</Link>
                    <Link className='text-[15px] leading-[22px] underline' href="">Privacy Policy</Link>
                    <Link className='text-[15px] leading-[22px] underline' href="">Cookies Settings</Link>
                </div>
                <div className='flex w-[134px] h-[25px] items-center '>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'><Link href="https://facebook.com" target="-blank">
            <FaFacebook size={24} /></Link></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'>  <Link href="https://instagram.com" target="-blank">
            <FaInstagram size={24} /></Link></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'><Link href="https://twitter.com" target="-blank">
            <FaTwitter size={24} /></Link></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center '> <Link href="https://linkedin.com" target="-blank">
            <FaLinkedin size={24} /></Link></div>
        </div>
            </div>
        </div>
      </div>
    </footer>
  )
}