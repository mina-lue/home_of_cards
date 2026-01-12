import Image from 'next/image';
import Link from 'next/link';

export default function NewsArticles() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">News & Articles</h2>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Article Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="/article-placeholder.png" alt="Article Image" width={300} height={200} className="rounded-md mb-4" />
            <p className="text-gray-500 text-sm mb-2">July 4, 2025 | 16 Comments</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Class aptent taciti sociosqu ad litora</h3>
            <Link href="#" className="text-red-600 hover:underline flex items-center">READ MORE <span className="ml-2">&rarr;</span></Link>
          </div>

          {/* Article Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="/article-placeholder.png" alt="Article Image" width={300} height={200} className="rounded-md mb-4" />
            <p className="text-gray-500 text-sm mb-2">July 4, 2025 | 16 Comments</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Class aptent taciti sociosqu ad litora</h3>
            <Link href="#" className="text-red-600 hover:underline flex items-center">READ MORE <span className="ml-2">&rarr;</span></Link>
          </div>

          {/* Article Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="/article-placeholder.png" alt="Article Image" width={300} height={200} className="rounded-md mb-4" />
            <p className="text-gray-500 text-sm mb-2">July 4, 2025 | 16 Comments</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Class aptent taciti sociosqu ad litora</h3>
            <Link href="#" className="text-red-600 hover:underline flex items-center">READ MORE <span className="ml-2">&rarr;</span></Link>
          </div>

          {/* Article Card 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="/article-placeholder.png" alt="Article Image" width={300} height={200} className="rounded-md mb-4" />
            <p className="text-gray-500 text-sm mb-2">July 4, 2025 | 16 Comments</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Class aptent taciti sociosqu ad litora</h3>
            <Link href="#" className="text-red-600 hover:underline flex items-center">READ MORE <span className="ml-2">&rarr;</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
