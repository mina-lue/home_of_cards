import Image from 'next/image';
import Link from 'next/link';

export default function SetChecklists() {
  return (
    <section className="bg-[#f4f1ea] py-20">
       {/* Note: bg-[#f4f1ea] matches the body background in globals.css, ensuring seamless look if needed, or stick to white/gray as per design interpretation. The design image shows it might be the same background as the page. */}
      <div className="container mx-auto px-4 relative">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-4 relative">
          <span className="text-red-500 font-bold tracking-widest text-sm mb-2">SET</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Set Checklists</h2>
          <p className="text-gray-600">Find every card in your favorite - Organized, Searchable, and Sortable.</p>
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-red-400 text-red-700 px-6 py-2 rounded-lg hover:bg-red-50 transition flex items-center text-sm font-medium hidden md:flex">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            Filter
          </button>
        </div>

        <div className="relative mt-12 px-4 md:px-12">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition z-10 shadow-sm hidden md:flex">
                 <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Right Arrow */}
             <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition z-10 shadow-sm hidden md:flex">
                 <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Set Card 1 */}
            <SetCard />
            {/* Set Card 2 */}
            <SetCard />
            {/* Set Card 3 */}
            <SetCard />
            {/* Set Card 4 */}
            <SetCard />
            </div>
        </div>
      </div>
    </section>
  );
}

function SetCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
        <Image src="/bit.png" alt="Set Image" fill className="object-cover" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 leading-tight">Set Name</h3>
      <div className="flex space-x-2 text-xs text-gray-500 mb-4">
        <span>Litora</span>
        <span>Jacinia</span>
        <span>2025</span>
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <button className="text-red-500 text-sm font-medium hover:underline">Print</button>
        <button className="bg-[#C82020] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition">Download</button>
      </div>
    </div>
  );
}
