import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full pt-8 pb-4">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        {/* Logo Section */}
        <div className="relative w-64 h-24">
           {/* Using placeholder logic if file missing, but expecting logo.png in public based on file list */}
           <Image 
            src="/logo.png" 
            alt="HOME of Cards" 
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Pill */}
        <nav className="bg-white rounded-full shadow-lg px-8 py-3 flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-semibold text-gray-800">
              <li>
                <Link href="/" className="relative text-black after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-red-600">
                  Home
                </Link>
              </li>
              <li><Link href="/checklists" className="hover:text-red-600 transition-colors">Checklists</Link></li>
              <li><Link href="/trackers" className="hover:text-red-600 transition-colors">Trackers</Link></li>
              <li><Link href="/breakers" className="hover:text-red-600 transition-colors">Breakers</Link></li>
              <li><Link href="/hoc-live" className="hover:text-red-600 transition-colors">HOC Live</Link></li>
              <li><Link href="/value-your-card" className="hover:text-red-600 transition-colors">Value your card</Link></li>
              <li><Link href="/we-buy-any-card" className="hover:text-red-600 transition-colors">We buy any card</Link></li>
            </ul>
            
            <Link 
              href="/contact" 
              className="bg-[#C82020] hover:bg-red-700 text-white px-8 py-2.5 rounded-full font-medium transition-colors ml-4"
            >
              Contact
            </Link>
        </nav>
      </div>
    </header>
  );
}
