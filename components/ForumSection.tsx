import Image from 'next/image';
import Link from 'next/link';

export default function ForumSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
            <div>
               <span className="text-red-500 font-bold tracking-widest text-sm mb-2 uppercase block">Community</span>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Forum</h2>
            </div>
            
            <Link href="#" className="bg-[#C82020] text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition">
                View All
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Large Image Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Card 1 */}
                 <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                    <div className="relative h-48 w-full">
                        <Image src="/bit.png" alt="Forum Topic" fill className="object-cover" />
                    </div>
                    <div className="p-6">
                         <div className="flex justify-between items-center text-xs text-gray-500 mb-2 font-semibold">
                             <span className="text-red-500">Trending | Cards</span>
                             <span className="text-gray-900 text-lg">14</span>
                         </div>
                         <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                             <span className="text-gray-900 font-bold">By Admin</span>
                             <span>Sep 2025</span>
                         </div>
                         
                         <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4">Etiam tincidunt mi vitae nibh dignis convallis lobortis elit</h3>
                         
                         <div className="flex justify-between items-center text-xs text-gray-500">
                             <span className="flex items-center">
                                 <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                 2 Month ago
                             </span>
                             <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                         </div>
                    </div>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                    <div className="relative h-48 w-full">
                        <Image src="/bit.png" alt="Forum Topic" fill className="object-cover" />
                    </div>
                    <div className="p-6">
                         <div className="flex justify-between items-center text-xs text-gray-500 mb-2 font-semibold">
                             <span className="text-red-500">Trending | Cards</span>
                             <span className="text-gray-900 text-lg">14</span>
                         </div>
                         <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                             <span className="text-gray-900 font-bold">By Admin</span>
                             <span>Sep 2025</span>
                         </div>
                         
                         <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4">Etiam tincidunt mi vitae nibh dignis convallis lobortis elit</h3>
                         
                         <div className="flex justify-between items-center text-xs text-gray-500">
                             <span className="flex items-center">
                                 <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                 2 Month ago
                             </span>
                             <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                         </div>
                    </div>
                 </div>
            </div>

            {/* Right Column - Text Cards */}
            <div className="lg:col-span-1 grid grid-cols-1 gap-8">
                 {/* Text Card 1 */}
                 <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col justify-center h-full">
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-2 font-semibold">
                             <span className="text-red-500">Trending | Cards</span>
                             <span className="text-gray-900 text-lg">14</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-6">
                             <span className="text-gray-900 font-bold">By Admin</span>
                             <span>Sep 2025</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-8">Etiam tincidunt mi vitae nibh dignis convallis lobortis elit</h3>
                      
                      <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
                             <span className="flex items-center">
                                 <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                 2 Month ago
                             </span>
                             <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                       </div>
                 </div>

                 {/* Text Card 2 */}
                 <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col justify-center h-full">
                       <div className="flex justify-between items-center text-xs text-gray-500 mb-2 font-semibold">
                             <span className="text-red-500">Trending | Cards</span>
                             <span className="text-gray-900 text-lg">14</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-6">
                             <span className="text-gray-900 font-bold">By Admin</span>
                             <span>Sep 2025</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-8">Etiam tincidunt mi vitae nibh dignis convallis lobortis elit</h3>
                      
                      <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
                             <span className="flex items-center">
                                 <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                 2 Month ago
                             </span>
                             <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                       </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
