import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f4f1ea] pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="mb-6 relative h-12 w-48">
               {/* Using the logo image, assuming it's suitable. Adjust sizing as needed. */}
               <Image src="/logo.png" alt="Home of Cards" fill className="object-contain object-left" />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Donec dapibus eget urna id egestas. v, nec consequat nibh euismod. Nam lacinia massa libero, a interdum justo egestas eget. In eget velit pretium.
            </p>
            <div className="flex space-x-3">
              {/* Social Icons */}
              <SocialIcon icon="facebook" />
              <SocialIcon icon="twitter" />
              <SocialIcon icon="linkedin" />
              <SocialIcon icon="instagram" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-600 text-sm font-medium">
              <li><Link href="#" className="hover:text-red-600 transition">Home</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Checklists</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Trackers</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Breakers</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">HOC Live</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Value your card</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">We buy any card</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Contact</Link></li>
            </ul>
          </div>

           {/* Quick Links */}
           <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-600 text-sm font-medium">
              <li><Link href="#" className="hover:text-red-600 transition">Grading Guide</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Community Forum</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Buy/Sell</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Trade</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Tracker Tool</Link></li>
            </ul>
          </div>

           {/* Resources */}
           <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Resources</h4>
            <ul className="space-y-4 text-gray-600 text-sm font-medium">
              <li><Link href="#" className="hover:text-red-600 transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Support</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition">Services</Link></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 mb-16"></div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ContactCard 
                icon="phone" 
                title="CALL US" 
                detail="+31 (0)76 410 0215" 
            />
            <ContactCard 
                icon="email" 
                title="EMAIL" 
                detail="support@homeofcard.com" 
            />
            <ContactCard 
                icon="support" 
                title="SUPPORT" 
                detail="24x7 Customer Support" 
            />
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
            <p className="mb-4 md:mb-0">Copyright © 2025 <span className="text-gray-700 font-bold">Home Of Cards.</span></p>
            <div className="flex space-x-6">
                <Link href="#" className="hover:text-gray-900 transition">Privacy Policy</Link>
                <Link href="#" className="hover:text-gray-900 transition">Contact</Link>
                <Link href="#" className="hover:text-gray-900 transition">Terms and Conditions</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: string }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-[#C82020] text-white flex items-center justify-center hover:bg-red-800 transition">
             {/* Using simple placeholder SVGs based on name */}
             {icon === 'facebook' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>}
             {icon === 'twitter' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>}
             {icon === 'linkedin' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>}
             {icon === 'instagram' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line></svg>}
        </a>
    )
}

function ContactCard({ icon, title, detail }: { icon: string, title: string, detail: string }) {
    return (
        <div className="flex items-center space-x-4 bg-transparent p-4 rounded-lg">
             <div className="w-14 h-14 rounded-md bg-[#C82020] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                {icon === 'phone' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>}
                {icon === 'email' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                {icon === 'support' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
             </div>
             <div>
                 <h5 className="text-red-700 font-bold uppercase text-xs mb-1 tracking-wider">{title}</h5>
                 <p className="text-gray-900 font-bold">{detail}</p>
             </div>
        </div>
    )
}
