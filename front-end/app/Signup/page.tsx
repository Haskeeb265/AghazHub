import Image from "next/image";
import Link from "next/link";

export default function Signup(){
    return(

        <div className="signupPage">
            
            <div className="logo text-center py-5">

                <Link href="/" className="flex justify-center"> <Image src="img/logo.svg" alt="logo" width={200} height={200} /> </Link> 

            </div>

            <div className="mt-5 lg:flex lg:items-center lg:justify-between lg:px-5">

                <div className="signupText hidden lg:block w-[400px]">

                    <div className="signupHeading text-6xl text-[#F88356] text-start">
                        <h1 className="">SIGN UP!</h1>
                    </div>

                    <div className="signupSubheading-1">
                        <div className="w-[100%] flex items-center justify-start mt-10 gap-1">
                            <h2 className="text-xl sp-bold">Go From Student to <span className="sugarpeachy text-[#EF3B51] text-3xl">Standout</span></h2>
                            <Image src="img/rocket.svg" alt="rocket" width={30} height={30} />
                        </div>
                        <div className="subheading-1-Para quicksand font-semibold text-[#F88356]">
                            <p>Shoot your shot at roles that actually match your vibe. No fluff, just real opppurtunities to build experience and get noticed</p>
                        </div>
                    </div>
                    <div className="signupSubheading-2">
                        <div className="w-[100%] flex items-center justify-start mt-5 gap-1">
                            <h2 className="text-xl sp-bold"><span className="text-3xl sugarpeachy text-[#EF3B51]">Link Up</span> and <span className="text-3xl sugarpeachy text-[#EF3B51]">Level Up</span></h2>
                            <Image src="img/clip.svg" alt="rocket" width={30} height={30} />
                        </div>
                        <div className="subheading-2-Para quicksand font-semibold text-[#F88356]">
                            <p>Connect with interns, mentors, and future teammates. Because your next DM could be your big break.</p>
                        </div>
                    </div>
                    <div className="signupSubheading-3">
                        <div className="w-[100%] flex items-center mt-5 gap-1">
                            <h2 className="text-xl sp-bold">Ready When <span className="sugarpeachy text-[#EF3B51] text-3xl">You</span>Are</h2>
                            <Image src="img/medal.svg" alt="rocket" width={30} height={30} />
                        </div>
                        <div className="subheading-3-Para quicksand font-semibold text-[#F88356]">
                            <p>One profile. All your stuff. Resumes, apps, wins, <span className="text-[#EF3B51] font-bold">SAVED</span>, <span className="text-[#EF3B51] font-bold">SYNCED</span>, and <span className="text-[#EF3B51] font-bold">READY</span> to flex whenever opportunity knocks.</p>
                        </div>
                    </div>


                </div>

                <div className="signupForm">
                    <div className="signupForm-bg lg:bg-[#FFE597] w-[500px]">
                        <div className="registerwithGoogle text-center">
                            <h2 className="text-xl">Register With:</h2>
                        </div>
                        <div className="iconsGoogle+Linkedin flex justify-center gap-5 mt-5">
                            <button ><Image src="img/google-icon.svg" alt="google icon" width={30} height={30} /></button>
                            <button ><Image src="img/linkedin-icon.svg" alt="google icon" width={30} height={30} /></button>
                        </div>

                        <div className="seperator flex items-center gap-5 font-semibold justify-center mt-10 ">
                            <div className="border-t-1 w-[150px]"></div>
                            <p>Or</p>
                            <div className="border-t-1 w-[150px]"></div>
                        </div>

                        <div className="signupForm">
                            <form className="mt-5">

                                <div className="flex items-center gap-10 justify-center">
                                    <input 
                                    required 
                                    type="text" 
                                    className="quicksand text-md border-2 border-[#000] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="First Name"
                                    />
                                
                                    <input 
                                    required 
                                    type="password" 
                                    className="quicksand text-md border-2 border-[#000]  focus:border-[#F88356] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="Last Name" 
                                    />
                                </div>
                                <div className="flex items-center gap-10 justify-center mt-3">
                                    <input 
                                    required 
                                    type="text" 
                                    className="quicksand text-md border-2 border-[#000] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="Username"
                                    />
                                
                                    <input 
                                    required 
                                    type="password" 
                                    className="quicksand text-md border-2 border-[#000]  focus:border-[#F88356] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="Email" 
                                    />
                                </div>
                                <div className="flex items-center gap-10 justify-center mt-3">
                                    <input 
                                    required 
                                    type="text" 
                                    className="quicksand text-md border-2 border-[#000] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="Password"
                                    />
                                
                                    <input 
                                    required 
                                    type="password" 
                                    className="quicksand text-md border-2 border-[#000]  focus:border-[#F88356] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="Confirm Password" 
                                    />
                                </div>
                                <div className="flex items-center gap-10 justify-center mt-3">
                                    <input 
                                    required 
                                    type="text" 
                                    className="quicksand text-md border-2 border-[#000] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="DOB"
                                    />
                                
                                    <input 
                                    required 
                                    type="password" 
                                    className="quicksand text-md border-2 border-[#000]  focus:border-[#F88356] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="Gender" 
                                    />
                                </div>
                                <div className="flex items-center gap-10 mt-3">
                                    <input 
                                    required 
                                    type="text" 
                                    className="quicksand text-md border-2 border-[#000] px-2 py-1 font-semibold text-[#000] rounded-[5] placeholder-[#F88356] text-[14px] focus:border-[#F88356] focus:outline-none" 
                                    placeholder="Education"
                                    />
                                </div>

                            </form>
                        </div>
                       
                    </div>
                </div>

            </div>

        </div>

    )
}