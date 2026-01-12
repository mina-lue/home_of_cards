'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full pt-4 md:pt-8 pb-4 relative z-50">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4 md:gap-8">
        {/* Top Row: Logo (Center on Desktop, Left on Mobile) & Hamburger (Right on Mobile) */}
        <div className="w-full flex justify-between items-center md:justify-center">
            {/* Logo Section */}
            <div className="relative w-48 h-16 md:w-64 md:h-24">
            <Image 
                src="/logo.png" 
                alt="HOME of Cards" 
                fill
                className="object-contain"
                priority
            />
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button 
                className="md:hidden text-gray-800 p-2 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
            </button>
        </div>

        {/* Navigation Pill (Desktop) */}
        <nav className="hidden md:flex bg-white rounded-full shadow-lg px-8 py-3 items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-semibold text-gray-800">
              <li>
                <Link href="/" className="relative text-black after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-red-600">
                  Home
                </Link>
              </li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">Checklists</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">Trackers</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">Breakers</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">HOC Live</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">Value your card</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">We buy any card</Link></li>
            </ul>
            
            <Link 
              href="#" 
              className="bg-[#C82020] hover:bg-red-700 text-white px-8 py-2.5 rounded-full font-medium transition-colors ml-4"
            >
              Contact
            </Link>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
            <div className="md:hidden w-full bg-white rounded-xl shadow-xl mt-2 p-6 absolute top-20 left-0 right-0 z-50 animate-in slide-in-from-top-2 mx-4 max-w-[calc(100%-2rem)]">
                <ul className="flex flex-col gap-4 text-center text-gray-800 font-semibold">
                    <li className="border-b border-gray-100 pb-2">
                        <Link href="/" className="text-red-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                        <Link href="#" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>Checklists</Link>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                        <Link href="#" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>Trackers</Link>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                        <Link href="#" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>Breakers</Link>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                        <Link href="#" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>HOC Live</Link>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                        <Link href="#" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>Value your card</Link>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                        <Link href="#" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>We buy any card</Link>
                    </li>
                    <li className="pt-2">
                         <Link 
                            href="#" 
                            className="inline-block bg-[#C82020] hover:bg-red-700 text-white px-8 py-2.5 rounded-full font-medium transition-colors w-full"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        )}
      </div>
    </header>
  );
}
