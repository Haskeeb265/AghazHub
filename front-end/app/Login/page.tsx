"use client";
import Image from "next/image";
import Link from "next/link";
import Animation from "@components/animations/PixelDuck";

export default function Login(){
    return(
        <div className="loginPage">
        
            <div className="loginHeader">

                <div className="loginLogo flex justify-center mt-[20px]">
                    <Image src="/img/blackhole.png" alt="logo" width={"100"} height={"100"} />
                </div>

                <div className="loginText">

                    <div className="loginHeading flex items-center justify-center">
                        <div className="text-center text-6xl neg-5 text-[#F88356]">
                            <h1>Sign In</h1>
                        </div>
                        <Animation />
                    </div>
                    <div className="loginPara quicksand font-semibold text-center text-[#F88356] neg-5">
                        <p>Welcome back! Let's find your next oppurtunity.</p>
                    </div>

                </div>

            </div>

            <div className="loginForm mt-10  ">

                <form className="flex flex-col w-[50%] mx-auto">

                    <input className="quicksand text-md border-1 px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px]" placeholder="Username"></input>
                    <input className="quicksand text-md border-1 px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] mt-5" placeholder="Password"></input>

                </form>

            </div>
        
        </div>
    )
}