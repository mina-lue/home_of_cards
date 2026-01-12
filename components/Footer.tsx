import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <Image src="https://via.placeholder.com/100x50" alt="HOME of cards logo" width={100} height={50} className="mb-4" />
            <p className="text-sm leading-relaxed mb-4">Duis dapibus eget urna id dignissim. nec consequat nibh euismod. Nam facilisis massa libero, a interdum justo egestas eget. In eget velit pretium, euismod quam non, cursus elit.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-red-600"><i className="fab fa-facebook-f"></i></Link>
              <Link href="#" className="text-gray-600 hover:text-red-600"><i className="fab fa-twitter"></i></Link>
              <Link href="#" className="text-gray-600 hover:text-red-600"><i className="fab fa-instagram"></i></Link>
              <Link href="#" className="text-gray-600 hover:text-red-600"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-red-600">Home</Link></li>
              <li><Link href="#" className="hover:text-red-600">Checklists</Link></li>
              <li><Link href="#" className="hover:text-red-600">Trackers</Link></li>
              <li><Link href="#" className="hover:text-red-600">Graders</Link></li>
              <li><Link href="#" className="hover:text-red-600">HOC Live</Link></li>
              <li><Link href="#" className="hover:text-red-600">Value your card</Link></li>
              <li><Link href="#" className="hover:text-red-600">We buy any card</Link></li>
              <li><Link href="#" className="hover:text-red-600">Contact</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-red-600">Grading Guide</Link></li>
              <li><Link href="#" className="hover:text-red-600">Community Forum</Link></li>
              <li><Link href="#" className="hover:text-red-600">Buy/Sell</Link></li>
              <li><Link href="#" className="hover:text-red-600">Trade</Link></li>
              <li><Link href="#" className="hover:text-red-600">Tracker Tool</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-red-600">Blog</Link></li>
              <li><Link href="#" className="hover:text-red-600">Help Center</Link></li>
              <li><Link href="#" className="hover:text-red-600">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-red-600">Support</Link></li>
              <li><Link href="#" className="hover:text-red-600">Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0 text-center md:text-left">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link href="#" className="hover:text-red-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-red-600">Contact</Link>
            <Link href="#" className="hover:text-red-600">Terms and Conditions</Link>
          </div>
          <p>&copy; 2025 Home Of Cards. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
