import Image from 'next/image';
import Link from 'next/link';

export default function GradingGuide() {
  return (
    <section id="grading" className="bg-[#f4f1ea] py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-red-500 font-bold tracking-widest text-sm mb-2 uppercase">How to check</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Grading Guide</h2>
          <p className="text-gray-600 max-w-2xl">
            Suspendisse lorem odio, eleifend a rhoncus pretium, gravida nec ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col">
                 {/* Tabs */}
                <div className="flex flex-wrap gap-8 mb-8 border-b border-gray-200 pb-4">
                    <button className="text-red-600 font-bold text-lg border-b-2 border-red-600 pb-4 -mb-4.5">PSA</button>
                    <button className="text-gray-500 font-bold text-lg hover:text-gray-800 transition">BGS</button>
                    <button className="text-gray-500 font-bold text-lg hover:text-gray-800 transition">GMA</button>
                    <button className="text-gray-500 font-bold text-lg hover:text-gray-800 transition">HGA</button>
                    <button className="text-gray-500 font-bold text-lg hover:text-gray-800 transition">SSG</button>
                </div>

                <div className="mb-8">
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec posuere ipsum. Suspendisse semper lobortis nisi, quis pulvinar arcu mollis eget.
                    </p>
                    
                    <div className="flex gap-3 flex-wrap mb-10">
                        <span className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium shadow-sm">Edges</span>
                        <span className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium shadow-sm">Corners</span>
                        <span className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium shadow-sm">Centering</span>
                        <span className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium shadow-sm">Surface</span>
                    </div>

                    <Link href="#" className="inline-flex items-center justify-center bg-[#C82020] text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition w-full sm:w-auto">
                        View Grading 
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[500px] w-full flex items-center justify-center">
                {/* Dotted lines/Pointers - Simplified representation for CSS */}
                {/* Edges Pointer */}
                <div className="absolute top-10 left-10 md:left-20 flex items-center z-10">
                   <span className="font-bold text-gray-800 mr-2">Edges</span>
                   <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                   <div className="w-20 border-t border-dotted border-gray-400 transform rotate-12 origin-left"></div>
                </div>

                 {/* Corners Pointer */}
                 <div className="absolute top-10 right-10 md:right-20 flex items-center z-10">
                   <div className="w-20 border-t border-dotted border-gray-400 transform -rotate-12 origin-right"></div>
                   <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                   <span className="font-bold text-gray-800 ml-2">Corners</span>
                </div>

                {/* Card Image */}
                <div className="relative w-64 h-96 shadow-2xl rounded-lg overflow-hidden transform rotate-1 z-0 border-4 border-yellow-400/30">
                     <Image src="/bit.png" alt="Grading Example" fill className="object-cover" />
                </div>

                {/* Centering Pointer */}
                <div className="absolute bottom-40 right-0 md:right-10 flex items-center z-10">
                   <div className="w-24 border-t border-dotted border-gray-400"></div>
                   <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                   <span className="font-bold text-gray-800 ml-2">Centering</span>
                </div>

                 {/* Surface Pointer */}
                 <div className="absolute bottom-10 left-10 md:left-20 flex items-center z-10">
                   <span className="font-bold text-gray-800 mr-2">Surface</span>
                   <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                   <div className="w-24 border-t border-dotted border-gray-400 transform -rotate-45 origin-left"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
