"use client";
import Image from "next/image";
import Link from "next/link";
import Animation from "@components/animations/PixelDuck";

export default function Login(){
    return(
        <div>
            <div>

                <div className="login-logo flex justify-center">
                    <Image src="/img/blackhole.png" alt="logo" width={120} height={120} />
                </div>
                <div className="heading-div flex items-center justify-center ">
                    <div className="login-heading text-4xl  text-center">
                        <h1>Sign In</h1>
                    </div>
                    
                    <div className="login-animation ">
                        <Animation />
                    </div>
                
                </div>
            
            </div>
        </div>
    )
}