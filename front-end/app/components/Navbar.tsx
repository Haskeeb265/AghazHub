import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="navbar md:container flex items-center justify-center gap-15 mx-auto mb-5">
        <div className='flex items-center justify-between gap-20'>
          <div className="logo">
            <a href="#"><Image src="/img/Logo.svg" alt="AghazHub Logo" width={178} height={178} /></a>
          </div>

          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden flex items-center px-3 py-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="fill-current text-[#000] w-8 h-8" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke='currentColor' />
            </svg>
          </button>

          {/* Nav links for md and up */}
          <nav className="hidden md:block">
            <ul className="flex gap-11 quicksand font-bold text-md">
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

        {/* Account button for md and up */}
        <div className='account-btn bg-[#EF3B51] font-bold rounded-lg text-white px-2 py-1 border-black border-1 hover:bg-[#F88356] transition-colors duration-300 ease-in-out hidden md:block'>
          <a href="account">Login</a>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-50">
          <ul className="flex flex-col gap-4 p-6 quicksand font-bold">
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>Explore</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </li>
            <li>
              <a href="account" className="account-btn bg-[#EF3B51] font-bold rounded-lg text-white px-2 py-1 border-black border-1 hover:bg-[#F88356] transition-colors duration-300 ease-in-out block text-center">
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}