
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="HOME of cards logo" width={100} height={50} />
          <nav className="ml-10">
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><Link href="/" className="hover:text-red-600">Home</Link></li>
              <li><Link href="/checklists" className="hover:text-red-600">Checklists</Link></li>
              <li><Link href="/trackers" className="hover:text-red-600">Trackers</Link></li>
              <li><Link href="/graders" className="hover:text-red-600">Graders</Link></li>
              <li><Link href="/hoc-live" className="hover:text-red-600">HOC Live</Link></li>
              <li><Link href="/value-your-card" className="hover:text-red-600">Value your card</Link></li>
              <li><Link href="/we-buy-any-card" className="hover:text-red-600">We buy any card</Link></li>
              <li><Link href="/contact" className="hover:text-red-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Contact</button>
      </div>
    </header>
  );
}
