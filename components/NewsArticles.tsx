import Image from 'next/image';
import Link from 'next/link';

export default function NewsArticles() {
  return (
    <section id="news" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 relative">
          <span className="text-red-500 font-bold tracking-widest text-sm mb-2">UPDATES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">News & Articles</h2>
          
          <Link href="#" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition hidden md:block">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Article Card 1 */}
          <ArticleCard />
          {/* Article Card 2 */}
          <ArticleCard />
          {/* Article Card 3 */}
          <ArticleCard />
          {/* Article Card 4 */}
          <ArticleCard />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          <button className="w-3 h-3 rounded-full border-2 border-red-500 flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition"></button>
        </div>
      </div>
    </section>
  );
}

function ArticleCard() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
      <div className="relative h-48 w-full">
        <Image src="/bit.png" alt="Article Image" fill className="object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-xs font-semibold mb-3 space-x-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            JULY 4, 2025
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
            16 COMMENTS
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">Class aptent taciti sociosqu ad litora</h3>
        <Link href="#" className="text-red-500 font-bold text-sm flex items-center hover:text-red-700 transition">
          READ MORE 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </div>
    </div>
  );
}
