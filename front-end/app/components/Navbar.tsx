import Image from 'next/image';

export default function Navbar() {
    return(
        
      <header>
        <div className="navbar container flex items-center gap-40 mx-auto">
          

        <div className='flex items-center justify-between gap-40'>
        
          <div className="logo">
            <a href="#"><Image src= "/img/logo.png" alt="AghazHub Logo" width={178} height={0} /></a>
          </div>
          
          <nav> {/*These are navlinks */}
            <ul className="flex gap-11 quicksand">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
          
        </div>

          <div className='account-btn bg-[#EF3B51] rounded-lg text-white px-2 py-1  border-black border-1'>
            <a href="account">Login</a>
          </div>
        
        </div>
      </header>

    )
}