import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    
    return (
        
        <footer className="background-img bg-[url('/img/footer-bg.png')] bg-cover bg-center bg-no-repeat py-10">
            
            <div className="yellow-overlay bg-[#F2E2B1]/50 md:w-[750px] mx-auto rounded-[10px] md:rounded-[50px]">

                <div className="row-1 flex items-center justify-center md:justify-between md:px-5">
                    
                    <div className="footer-logo flex justify-center md:justify-start">
                        <Image src="/img/footer-logo.svg" alt="footer logo" width={191} height={191}></Image>
                    </div>
                    <div className="scroll-btn hidden md:block">
                        <button className="bg-[#F88356] rounded-full p-1 outline-3 outline-dotted outline-[#EF3B51] hover:outline-[#000] hover:bg-[#EF3B51] transition-colors duration-300 ease-in-out" onClick={() => window.scroll({top: 0,  behavior: "smooth"})}><Image src="img/arrow-top-large.svg" alt="arrow top" width={30} height={30} /></button>
                    </div>

                </div>

                <div className="row-2 flex flex-col items-center justify-between md:flex-row md:px-5 md:py-2">
                    <div className="footer-content">
                        <div className="footer-text flex items-center justify-center md:justify-start gap-1">
                            <h3 className="sp-regular text-white neg-5 text-xl md:text-2xl">You don't need to scroll anywhere else</h3>
                            <Image src="img/brown-heart.svg" alt="brown heart" width={20} height={20} />
                        </div>

                        <div className="explore-btn flex justify-center mt-2 md:justify-start">
                            <Link className="bg-[#EF3B51] text-white neg-5 sp-regular text-[12px] flex items-center gap-0.5 rounded-full px-2" href="/explore">Explore <Image src="img/explore-btn-arrow.svg" alt="arrow" width={10} height={10} /></Link>
                        </div>

                        <div className="footer-credits">

                            <div className="border-t-1 mt-5 text-[7px] hidden md:block">
                                
                                <div className="TOC+PP+Copyright flex justify-between mt-1">
                                    <Link href="#">Terms and Conditions</Link>
                                    <p>© 2025 AghazHub. All rights reserved.</p>
                                    <Link href="#">Privacy Policy</Link>
                                </div>
                                <p className="flex justify-center mt-1">Made with <span className="text-[#CF0F26]">&lt;3</span></p>

                            </div>

                        </div>
                    </div>

                    <div className="footer-links flex flex-col items-center justify-between md:gap-10 md:flex-row mt-10 md:mt-0">
                        
                        <div className="quickLinks flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="quicksand font-regular text-xl">Quick Links</h3>
                            <ul className="neg-5">
                                <li ><Link className="sp-regular" href="#">Home</Link></li>
                                <li><Link className="sp-regular" href="/aboutus">About Us</Link></li>
                                <li><Link className="sp-regular" href="/contact">Contact Us</Link></li>
                                <li><Link className="sp-regular" href="/profile">Profile</Link></li>
                            </ul>
                        </div>

                        <div className="socialLinks flex flex-col items-center md:items-start text-center md:text-left mt-5 md:mt-0">
                            <h3 className="quicksand font-regular text-xl">Connect With Us</h3>
                            <ul className="neg-5">
                                <li><Link className="sp-regular" href="#">Instagram</Link></li>
                                <li><Link className="sp-regular" href="/aboutus">Facebook</Link></li>
                                <li><Link className="sp-regular" href="/contact">X (Twitter)</Link></li>
                                <li><Link className="sp-regular" href="/profile">Threads</Link></li>
                            </ul>
                        </div>

                    </div>
                     <div className="border-t-1 mt-5 w-full text-[7px] md:hidden">
                            
                            <div className="TOC+PP+Copyright flex justify-around mt-1">
                                <Link href="#">Terms and Conditions</Link>
                                <p>© 2025 AghazHub. All rights reserved.</p>
                                <Link href="#">Privacy Policy</Link>
                            </div>
                            <p className="flex justify-center mt-1">Made with <span className="text-[#CF0F26]">&lt;3</span></p>

                        </div>

                </div>

            </div>

        </footer>

        
    )
}