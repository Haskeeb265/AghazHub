import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    
    return (
    
        <footer className="bg-[url('/img/footer-img.png')] bg-center bg-cover w-full h-100 py-16">
            <div className="grid grid-col-2 bg-[#F2E2B1]/50 max-w-[994px] rounded-[150px] mx-auto">
                
                <div className="footer-container">
                    
                    <div className="col-1 grid grid-row-4">
                        <div className="row-1">
                            <Image src="/img/footer-logo.svg" alt="Footer Logo" width={191} height={191} />
                        </div>
                        
                        <div className="row-2 flex gap-1">
                            <p className="sp-regular neg-5 text-[#fff] text-4xl">You don't need to scroll anywhere else</p>
                            <Image src="/img/brown-heart.svg" alt="brown heart" width={30} height={30} />
                        </div>

                        <div className="row-3 ">
                            <Link className="text-base  text-[#fff] px-3 py-2 rounded-full sp-regular neg-5 bg-[#EF3B51]"  href="/explore">Explore <Image className="inline mx-1" src="/img/explore-btn-arrow.svg" alt="213" width={20} height={20}></Image></Link>
                        </div>
                    </div>

                    <div className="col-2">
                    </div>
                </div>
            </div>
            
        </footer>

    )
}