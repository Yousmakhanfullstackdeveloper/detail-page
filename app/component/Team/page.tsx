import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";

const OurTeam = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl text-[#000000] font-bold mb-4">Our Team</h1>
        <p className="text-lg text-[#000000] font-medium mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* =============================================team 1======================================= */}
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/image/Image 7.png"
              alt="member 1"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-xl">James Nudku</h1>
          <p className="text-[#000000] mt-2">Marketing Coordinator</p>

          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              <FaLinkedin size={22} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              <FaTwitter size={22} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              <FaSquareDribbble size={22} />
            </Link>
          </div>
        </div>

        {/* =============================================team 2======================================= */}
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/image/Image 8.png"
              alt="member 2"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-xl">James Nudku</h1>
          <p className="text-[#000000] mt-2">Marketing Coordinator</p>

          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              <FaLinkedin size={22} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              <FaTwitter size={22} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              <FaSquareDribbble size={22} />
            </Link>
          </div>
        </div>

       {/* =============================================team 3======================================= */}
       <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/image/Image 9.png"
              alt="member 3"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-xl">James Nudku</h1>
          <p className="text-[#000000] mt-2">Marketing Coordinator</p>

          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              <FaLinkedin size={22} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              <FaTwitter size={22} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              <FaSquareDribbble size={22} />
            </Link>
          </div>
        </div>
    {/* =============================================team 4======================================= */}
    <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/image/Image 10.png"
              alt="member 4"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-xl mb-2">James Nudku</h1>
          <p className="text-[#000000]">Marketing Coordinator</p>

          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              <FaLinkedin size={22} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              <FaTwitter size={22} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              <FaSquareDribbble size={22} />
            </Link>
          </div>
        </div>
 {/* =============================================team 5======================================= */}
 <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/image/Image 11.png"
              alt="member 5"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-xl">James Nudku</h1>
          <p className="text-[#000000] mt-2">Marketing Coordinator</p>

          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              <FaLinkedin size={22} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              <FaTwitter size={22} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              <FaSquareDribbble size={22} />
            </Link>
          </div>
        </div>
         {/* =============================================team 6======================================= */}
         <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/image/Image 12.png"
              alt="member 6"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-xl">James Nudku</h1>
          <p className="text-[#000000] mt-2">Marketing Coordinator</p>

          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              <FaLinkedin size={22} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              <FaTwitter size={22} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              <FaSquareDribbble size={22} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurTeam;