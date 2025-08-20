import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    
    return (
        
        <footer className="background-img bg-[url('/img/footer-bg.png')] bg-cover bg-center bg-no-repeat">
            
            <div className="yellow-overlay bg-[#F2E2B1]/50 md:w-[80%] mx-auto">

                <div className="row-1">
                    
                    <div className="footer-logo flex justify-center md:justify-start">
                        <Image src="/img/footer-logo.svg" alt="footer logo" width={191} height={191}></Image>
                    </div>
                    <div className="scroll-btn hidden md:block">
                        <button className="bg-[#F88356] rounded-full p-1 outline-3 outline-dotted outline-[#EF3B51] hover:outline-[#000] hover:bg-[#EF3B51] transition-colors duration-300 ease-in-out" onClick={() => window.scroll({top: 0,  behavior: "smooth"})}><Image src="img/arrow-top-large.svg" alt="arrow top" width={30} height={30} /></button>
                    </div>

                </div>

                <div className="row-2">

                    <div className="footer-text flex items-center justify-center md:justify-start gap-1.5">
                        <h3 className="sp-regular text-white neg-5 text-xl">You don't need to scroll anywhere else</h3>
                        <Image src="img/brown-heart.svg" alt="brown heart" width={30} height={30} className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                    </div>

                    <div className="explore-btn flex justify-center mt-2 md:justify-start">
                        <Link className="bg-[#EF3B51] text-white neg-5 sp-regular text-[12px] flex items-center gap-0.5 rounded-full px-2" href="/explore">Explore <Image src="img/explore-btn-arrow.svg" alt="arrow" width={10} height={10} /></Link>
                    </div>

                    <div className="footer-links flex flex-col items-center justify-center md:flex-row mt-10">
                        
                        <div className="quickLinks flex flex-col items-center text-center md:text-left">
                            <h3 className="quicksand font-regular text-xl">Quick Links</h3>
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="/aboutus">About Us</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/profile">Profile</Link></li>
                            </ul>
                        </div>

                        <div className="socialLinks flex flex-col items-center text-center md:text-left mt-5">
                            <h3 className="quicksand font-regular text-xl">Connect With Us</h3>
                            <ul>
                                <li><Link href="#">Instagram</Link></li>
                                <li><Link href="/aboutus">Facebook</Link></li>
                                <li><Link href="/contact">X (Twitter)</Link></li>
                                <li><Link href="/profile">Threads</Link></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

        </footer>

        
    )
}