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

                    <form className="flex flex-col w-[250px] mx-auto">

                        <input 
                        required 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="quicksand text-md border-2 border-[#000] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                        placeholder="Username"
                        />
                        
                        <input 
                        required 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="quicksand text-md border-2 border-[#000]  focus:border-[#F88356] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] mt-5 focus:border-[#F88356] focus:outline-none" 
                        placeholder="Password" 
                        />

                        <button 
                        type="submit" 
                        onClick={handleSubmit} 
                        className="cursor-pointer mx-auto bg-[#EF3B51] w-[50%] font-bold rounded-lg text-white py-0.5 hover:bg-[#F88356] transition-colors duration-300 ease-in-out mt-5">Login
                        </button>
                    
                    </form>

                    <div className="forgetPassword text-center mt-2">
                        <Link href="/forgetpassword" className="text-[12px] text-[#EF3B51] hover:text-[#F88356] underline transition-colors duration-300 ease-in-out font-semibold">Forgot Password?</Link>
                    </div>

                </div>

                <div className="socialLogin mt-15">
                    
                    <div className="flex items-center justify-center gap-3">
                        <div className="border-t-1 w-[50px]"></div>
                        <p className="text-[11px] font-semibold">Or sign in with</p>
                        <div className="border-t-1 w-[50px]"></div>
                    </div>

                    <div className="socialIcons flex items-center justify-center gap-5 mt-3">
                        <Link href="#"><Image src="img/google-icon.svg" alt="google icon" width={40} height={40} /></Link>
                        <Link href="#"><Image src="img/linkedin-icon.svg" alt="linkedin icon" width={40} height={40} /></Link>
                    </div>

                </div>

                <div className="signUp text-center mt-10 md:mt-20 quicksand font-semibold text-[12px] flex items-center justify-center gap-0.5">
                    <p>Don't have an account? <Link className="text-[#EF3B51]" href="#">SIGN UP!</Link> It's free</p>
                    <Image src="img/brown-heart.svg" alt="heart icon" width={15} height={15} />
                </div>
            
        
        </div>
    )
}