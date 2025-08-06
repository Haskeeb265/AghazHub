import Image from "next/image";

export default function Home() {
  return(
    <div>

      <header>


        <div className="navbar container">

          
          <div className="logo">

            <Image src= "/img/logo(transparent).png" alt="AghazHub Logo" width={178} height={44} />

          </div>

          
          <nav> {/*These are navlinks */}
            <ul>
            </ul>
          </nav>

        </div>

      </header>

        
    </div>
  )
}
