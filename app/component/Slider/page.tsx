import React from 'react'
import Image from "next/image";
export default function Testimonials() {
  return (
    <section id='star' className='h-full w[1280px] bg-[#F7F7F7] py-[112px] flex flex-col gap-[80px] items-start pl-[90px]'>
      <div className="w-[560px] h-[109px] flex flex-col gap-[24px] ml-[64px]">
        <h2 className='leading-[57.6px] font-bold text-[48px]'>Customer testimonials</h2>
        <p className='leading-[30px] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="xl:w-[1152px] w-[768px]  h-[417.89px] flex flex-col gap-[48px] mx-[64px]">
        <div className="h-[321.89px] flex flex-row gap-[32px]">
            {/* -----------------------------------card 1---------------------------------- */}
            <div className='h-[320.89px] w-[362.27px]  p-[32px] flex flex-col gap-[24px] border-solid border-black border-[1px]'>
                <div className="w-[116px] h-[18.89px] flex flex-row gap-[4px]">
                    <Image src="/image/star.png" alt="star" width={20} height={20} />
                    <Image src="/image/star.png" alt="star" width={20} height={20}  />
                    <Image src="/image/star.png" alt="star" width={20} height={20}  />
                    <Image src="/image/star.png" alt="star" width={20} height={20}  />
                    <Image src="/image/star.png" alt="star" width={20} height={20}  />
                </div>
                <div className="w-[298.67px] h-[215px] flex flex-col gap-[24px]">
                    <p className='text-[18px] leading-[27px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum trisDuis cursus, mi quis viverra ornare."</p>
                    <div className='w-[254px] h-[56px] flex flex-row gap-[20px] '>
                        <Image  src="/image/Avatar Image.png" alt="logo" width={56} height={56}/>
                        <div className='w-[178px] h-[48px] my-[4px]'>
                            <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>James Nduku</p>
                            <p className='text-[16px] h-[24px] leading-[24px]'>Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------card 2------------------------------- */}
            <div className='h-[320.89px] w-[362.27px]  p-[32px] flex flex-col gap-[24px] border-solid border-black border-[1px]'>
                <div className="w-[116px] h-[18.89px] flex flex-row gap-[4px]">
                    <Image  src="/image/star.png" alt="star" width={20} height={20}  />
                    <Image  src="/image/star.png" alt="star" width={20} height={20}  />
                    <Image  src="/image/star.png" alt="star"  width={20} height={20} />
                    <Image  src="/image/star.png" alt="star" width={20} height={20} />
                    <Image  src="/image/star.png" alt="star" width={20} height={20} />
                </div>
                <div className="w-[298.67px] h-[215px] flex flex-col gap-[24px]">
                    <p className='text-[18px] leading-[27px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className='w-[254px] h-[56px] flex flex-row gap-[20px] '>
                        <Image  src="/image/Avatar Image 2.png" alt="logo" width={56} height={56} />
                        <div className='w-[178px] h-[48px] my-[4px]'>
                            <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>Erick Kipkemboi</p>
                            <p className='text-[16px] h-[24px] leading-[24px]'>Scrum Master</p>
                        </div>
                    </div>
                </div>
              </div>
              {/* -------------------------------------------------card 3----------------------------------- */}
            <div className='h-[320.89px] w-[362.27px]  p-[32px] hidden  xl:flex flex-col gap-[24px] border-solid border-black border-[1px]'>
                <div className="w-[116px] h-[18.89px] flex flex-row gap-[4px]">
                    <Image  src="/image/star.png" alt="star" width={20} height={20} />
                    <Image  src="/image/star.png" alt="star" width={20} height={20}  />
                    <Image  src="/image/star.png" alt="star" width={20} height={20} />
                    <Image  src="/image/star.png" alt="star" width={20} height={20} />
                    <Image  src="/image/star.png" alt="star" width={20} height={20} />
                </div>
                <div className="w-[298.67px] h-[215px] flex flex-col gap-[24px]">
                    <p className='text-[18px] leading-[27px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className='w-[254px] h-[56px] flex flex-row gap-[20px] '>
                        <Image  src="/image/Avatar Image 3.png" alt="logo" width={56} height={56} />
                        <div className='w-[178px] h-[48px] my-[4px]'>
                            <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>Stephen Kerubo</p>
                            <p className='text-[16px] h-[24px] leading-[24px]'>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[48px] w-[1152px] w-[760px] flex justify-between'>
            <div className="w-[72px] h-[8px] inline-flex gap-[8px] my-4">
                <div className='rounded-full h-2 w-2 bg-black'></div>
                <div className='bg-[#8D8D8D] rounded-full h-2 w-2'></div>
                <div className='bg-[#8D8D8D] rounded-full h-2 w-2'></div>
                <div className='bg-[#8D8D8D] rounded-full h-2 w-2'></div>
                <div className='bg-[#8D8D8D] rounded-full h-2 w-2'></div>
            </div>
            <div className="w-[111px] h-[48px] flex gap-[15px]">
                <button className="w-12 h-12"><Image src="/image/Button l.png" alt="" width={50} height={50}  /></button>
                <button className="w-12 h-12"><Image src="/image/Button r.png" alt="" width={50} height={50} /></button>
            </div>
        </div>
      </div>
    </section>
  )
}