import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return(
        
      <header>
        <div className="navbar container flex items-center justify-center gap-40 mx-auto mb-5">
          <div className='flex items-center justify-between gap-40'>
          
            <div className="logo">
              <a href="#"><Image src= "/img/Logo.svg" alt="AghazHub Logo" width={178} height={178} /></a>
            </div>
            
            <nav> {/*These are navlinks */}
              <ul className="flex gap-11 quicksand font-bold">
                <li className='hover:text-[#EF3B51] transition-colors duration-300 ease-in-out'>
                  <Link href="#">Home</Link>
                </li>
                <li className='hover:text-[#EF3B51] transition-colors duration-300 ease-in-out'>
                  <Link href="#">About Us</Link>
                </li>
                <li className='hover:text-[#EF3B51] transition-colors duration-300 ease-in-out'>
                  <Link href="#">Explore</Link>
                </li>
                <li className='hover:text-[#EF3B51] transition-colors duration-300 ease-in-out'>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </nav>
            
          </div>

          <div className='account-btn bg-[#EF3B51] font-bold rounded-lg text-white px-2 py-1  border-black border-1 hover:bg-[#F88356] transition-colors duration-300 ease-in-out'>
            <a href="account">Login</a>
          </div>
        
        </div>
      </header>

    )
}