import React from "react"
import Image from "next/image"
const Logo=()=>{
return(
    <div className="flex bg-[#F7F7F7] py-20 ">
        <div className="ml-10">
            <h1 className="text-3xl font-semibold mt-2 Font-Roboto">Trusted by 2000+ companies <br />
            worldwide.</h1>
        </div>
        <div className="ml-10">
            <Image
            src="/image/Logos.png"
            alt="image"
            width={900}
            height={300}></Image>
        </div>
    </div>
)
}
export default Logo