import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    
    return (
    
        <footer className="bg-[url('/img/footer-img.png')] bg-cover bg-center w-full py-16">
            <div className="bg-[#F2E2B1]/50 max-w-[994px] rounded-[150px] h-100 mx-auto">
                <div className="footer-container grid grid-cols-4  ">
                    
                    <div className="col-span-3 grid grid-rows-[min-content_min-content_min-content_min-content] ">
                        <div className="row-1">
                            <Image src="/img/footer-logo.svg" alt="Footer Logo" width={191} height={191} />
                        </div>
                        
                        <div className="row-2 flex gap-1 items-center">
                            <p className="sp-regular neg-5 text-[#fff] text-4xl">You don't need to scroll anywhere else</p>
                            <Image src="/img/brown-heart.svg" alt="brown heart" width={30} height={30} />
                        </div>

                        <div className="row-3 mt-4 ">
                            <Link className="text-base text-[#fff] px-3 py-2 rounded-full sp-regular neg-5 bg-[#EF3B51]"  href="/explore">Explore <Image className="inline mx-1" src="/img/explore-btn-arrow.svg" alt="213" width={20} height={20}></Image></Link>
                        </div>
                        
                        <div className="row-4 border-t mt-10 flex items-center justify-between">
                   
                                <p className="text-[10px] neg-5">© 2025 AghazHub. All rights reserved.</p>
          
                       
                                <p className="text-[10px] neg-5">Made with <span className="text-[#CF0F26]">&lt;3</span></p>
                          
                            <div className="flex gap-5">
                                <Link className="text-[10px] neg-5" href="/toc">Terms and conditions</Link>
                                <Link className="text-[10px] neg-5" href="/privacy">Privacy Policy</Link>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-rows-4">
                        <div className="row-1">
                            <button className="cursor-pointer bg-[#F88356]" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >asd</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>

    )
}