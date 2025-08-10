"use client";
import Navbar from "./components/Navbar"
import Marquee from "./components/Marquee";
import Image from "next/image";
import Animation from "@components/animations/ManRelaxingAnimation";
import Link from "next/link";
import Footer from "./components/Footer";


export default function Home() {
  return(
    <div>
      

      <Navbar />
      <div className="w-full border-1 mb-10"></div>        
      <Marquee />
      
      <main className="hero_sec my-20 container mx-auto">

        <div className="header_div flex items-center justify-center gap-2.5">
          <h1 className="hero_heading text-6xl neg-5">Welcome to Aghaz Hub</h1>
          <Image src="/img/blackhole.png" alt="Hero Image" width={106} height={106} />
        </div>

        <div className="hero_content flex items-center justify-center mt-5 gap-15">
          <div className="hero_text neg-5">
            
            <div className="item flex mt-1 items-center gap-1.5">
              <h2 className="text-4xl ">Find Internships</h2>
              <Image src="/img/laptop.svg" alt="Laptop Image" width={44} height={44} />
            </div>
            <div className="item flex mt-1 items-center">
              <h2 className="text-4xl ">Grow your Network</h2>
              <Image src="/img/bobatea.svg" alt="BobaTea Image" width={44} height={44} />
            </div>
            <div className="item flex mt-1 items-center gap-1.5">
              <h2 className="text-4xl ">Kickstart your Goals</h2>
              <Image src="/img/rocket.svg" alt="Rocket Image" width={44} height={44} />
            </div>

          </div>
          <div className="animation-div">
            <Animation />
          </div>
        </div>

        <div className="CTA-div mt-30 ">
          <div className="CTA-heading bg-[#FFE597] w-4xl mx-auto rounded-lg py-3">
            <h2 className="flex items-center justify-center text-6xl ">All Oppurtunities in <Image src="/img/IndexFingerEmoji.svg" alt="Index finger emoji" width={70} height={70}></Image> Place!</h2>
          </div>
          <div className="CTA-text text-center text-md mt-5 w-2xl mx-auto">
            <p>Ready to find your dream internship and kickstart your journey? Connect with fellow interns, grow your network, and gain the experience you need to shape the future you believe in!</p>
          </div>
          <div className="CTA-button text-center items-center mt-2 flex justify-center mb-2">
            <Image className="self-start" style={{ animation: 'pulse-scale 2s ease-in-out infinite' }}  src="/img/star-emoji.svg" alt="Star emoji" width={35} height={35} />
            <Link href="#explore" className="border-1 text-sm rounded-md px-2 py-2 hover:border-none hover:bg-[#EF3B51] hover:text-[#FFF] transition duration-300 ease-in-out ">Karein Aghaz?</Link>
            <Image className="self-end mt-5"  style={{ animation: 'pulse-scale-reverse 2s ease-in-out infinite' }} src="/img/star-emoji.svg" alt="Star emoji" width={35} height={35} />
          </div>
        </div>
      </main>
      <Marquee/>
      <Footer />
    

    </div>
  )
}

