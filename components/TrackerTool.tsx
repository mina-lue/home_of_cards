import Image from 'next/image';
import Link from 'next/link';

export default function TrackerTool() {
  return (
    <section className="bg-gradient-to-br from-[#d63030] to-[#b91c1c] py-20 relative overflow-hidden">
      {/* Background patterns overlay could go here */}
      <div className="absolute inset-0 opacity-10 bg-[url('/bit.png')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 relative text-white">
          <span className="font-bold tracking-widest text-sm mb-2 opacity-90">SET</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Tracker Tool</h2>
          <p className="text-red-100 max-w-xl text-center">Find every card in your favorite - Organized, Searchable, and Sortable.</p>
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-red-300 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-red-700 transition flex items-center text-sm font-medium hidden md:flex">
             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            Filter
          </button>
        </div>

        <div className="relative px-4 md:px-12">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition z-10 shadow-lg text-red-600 hidden md:flex">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Right Arrow */}
             <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition z-10 shadow-lg text-red-600 hidden md:flex">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tracker Card 1 */}
              <TrackerCard />
              {/* Tracker Card 2 */}
              <TrackerCard />
              {/* Tracker Card 3 */}
              <TrackerCard />
              {/* Tracker Card 4 */}
              <TrackerCard />
            </div>
        </div>
      </div>
    </section>
  );
}

function TrackerCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden border border-gray-100">
        <Image src="/bit.png" alt="Set Image" fill className="object-cover" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3">Set 1</h3>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
        <div className="bg-red-600 h-1.5 rounded-full" style={{ width: '70%' }}></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mb-4">
        <span>70/100</span>
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <button className="text-red-500 text-sm font-medium hover:underline">Print</button>
        <button className="bg-[#C82020] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition">View Tracker</button>
      </div>
    </div>
  );
}
