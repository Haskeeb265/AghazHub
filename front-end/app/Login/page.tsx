"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Animation from "@components/animations/PixelDuck";

export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
    };

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

                    <input 
                    required 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="quicksand text-md border-1 px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px]" 
                    placeholder="Username"
                    />
                    
                    <input 
                    required 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="quicksand text-md border-1 px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] mt-5" 
                    placeholder="Password" 
                    />

                    <button 
                    type="submit" 
                    onClick={handleSubmit} 
                    className="cursor-pointer mx-auto bg-[#EF3B51] w-[50%] font-bold rounded-lg text-white py-0.5 hover:bg-[#F88356] transition-colors duration-300 ease-in-out mt-5">Login
                    </button>
                
                </form>

                <div className="forgetPassword text-center mt-2">
                    <Link href="/forgetpassword" className="text-[12px] text-[#EF3B51] hover:bg-[#F88356] transition-colors duration-300 ease-in-out font-semibold">Forgot Password?</Link>
                </div>

            </div>

            <div className="socialLogin">
                <div className="flex items-center justify-center gap-3">
                    <div className="border-t-1"></div>
                    <p>Or sign in with</p>
                    <div className="border-t-1"></div>
                </div>
            </div>
        
        </div>
    )
}