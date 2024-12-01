import React from 'react'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <header className='bg-white text-black py-2 px-8 border-2 border-black'>
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-6'>
                        <div className='flex items-center space-x-1'>
                            <span>Phone Number:956 742 455 678</span>
                            <div>
                                <span>| Email;info@ddsgnr.com</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 pl-[850px]'>

                            <Link href="https://facebook.com" target="-blank">
                                <FaFacebook size={24} /></Link>
                            <Link href="https://instagram.com" target="-blank">
                                <FaInstagram size={24} /></Link>
                            <Link href="https://twitter.com" target="-blank">
                                <FaTwitter size={24} /></Link>
                            <Link href="https://linkedin.com" target="-blank">
                                <FaLinkedin size={24} /></Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}
export default Header;