import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    
    return (
        
        <footer className="relative bg-[url('/img/footer-img.png')] bg-cover bg-center h-[500px] justify-items-center w-full py-10">
            <div className=" absolute inset-0 bg-black/20"></div>

            <div className="footerBg rounded-full footer-container relative bg-[#F2E2B1]/50">
                <div className="row-1 flex items-center justify-between">
                    <div>
                        <Image src="/img/footer-logo.svg" alt="Footer Image" width={191} height={191} />
                    </div>
                    <div className="scrollButton">
                        <button className="cursor-pointer bg-[#F88356] rounded-full outline-2 outline-dotted outline-[#EF3B51]  hover:bg-[#EF3B51] hover:outline-[#000] transition duration-300 ease-in-out " onClick={() => window.scrollTo({top:0, behavior:"smooth"})}><Image src="/img/arrow-top-large.svg" alt="arrow" width={30} height={30} /> </button>
                    </div>
                </div>
                <div className="row-2 flex justify-between items-start ">
                    <div className="row-items w-[60%]">
                        <div className="flex items-center gap-1">
                            <h3 className="neg-5 text-[#fff] sp-regular text-[32px]">You don't need to scroll anywhere else</h3>
                            <Image src="img/brown-heart.svg" alt="brown heart" width={30} height={30} />
                        </div>
                        <div className="footer-btn">
                            <Link href="#explore" className="flex text-center gap-0.5 bg-[#EF3B51] px-4 py-1 rounded-full w-[100px] text-6 neg-5 text-[#fff] sp-regular hover:bg-[#F88356] transition duration-300 ease-in-out ">Explore<Image src="img/explore-btn-arrow.svg" alt="arrow" width={20} height={20} /></Link>

                        </div>
                        <div className="row-border border-t-1 mt-10 flex items-center justify-between">
                            <p className="neg-5 quicksand text-[10px] font-bold">© 2025 AghazHub. All rights reserved.</p>
                            <p className="neg-5 quicksand text-[10px] font-bold">Made with <span className="text-[#CF0F26]">&lt;3</span></p>
                            <div className="footer-links quicksand font-bold text-[10px] neg-5 flex gap-4">
                                <Link href="#">Privacy Policy</Link>
                                <Link href="#">Terms and Conditions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="quickLinks+socials flex gap-8 ">
                        <div className="quickLinks">
                            <h3 className="quicksand neg-5 text-[24px]">Quick Links</h3>
                            <div className="links flex flex-col neg-5 sp-bold font-semibold text-[16px]">
                                <Link href="#">Home</Link>
                                <Link href="#">Abous Us</Link>
                                <Link href="#">Contact Us</Link>
                                <Link href="#">Account</Link>
                            </div>
                        </div>
                        <div className="socials">
                            <h3 className="quicksand neg-5 text-[24px]">Connect With Us</h3>
                             <div className="links flex flex-col neg-5 sp-bold font-semibold text-[16px]">
                                <Link href="#">Facebook</Link>
                                <Link href="#">Instagram</Link>
                                <Link href="#">X</Link>
                                <Link href="#">Threads</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    
            
            

        </footer>

    )
}