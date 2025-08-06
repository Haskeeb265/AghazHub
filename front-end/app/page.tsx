import Image from "next/image";

export default function Home() {
  return(
    <div>

      <header>


        <div className="navbar container flex items-center justify-between">
          
          <div className="logo">
            <a href="#"><Image src= "/img/logo.png" alt="AghazHub Logo" width={178} height={0} /></a>
          </div>

          
          <nav> {/*These are navlinks */}
            <ul className="flex gap-11 sp-bold">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>

        </div>

      </header>

        
    </div>
  )
}
