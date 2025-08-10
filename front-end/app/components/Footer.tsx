import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
    
    return (
        <div className="bg-[#F2E2B1] h-200">
            <div className="container mx-auto flex items-center justify-between">
                <div className="mt-20">
                <div className="col-1-div ">
                    <div className="col-1">
                        <div className="flex items-center">
                            <p className=" text-5xl text-[#fff] sp-regular neg-5 ">You don't need to scroll anywhere else.</p>  <Image className="pb-2" src="/img/brown-heart.svg" alt="Brown Heart" width={50} height={50} /> 
                        </div>
                        <p className="sp-regular neg-5 text-[#F88356] mb-5 text-center md:text-start">Everything you need is right here</p>
                    <Link href="#explore" className="text-md sp-bold neg-5 text-[#fff]  bg-[#EF3B51]  rounded-full px-2 py-1 hover:text-[#000] hover:bg-[#F88356] transition-colors duration-300 ease-in-out">Explore Now</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}