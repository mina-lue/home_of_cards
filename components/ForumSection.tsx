import Image from 'next/image';
import Link from 'next/link';

export default function ForumSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Forum</h2>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 text-sm md:text-base">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Forum Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="https://via.placeholder.com/300x200" alt="Forum Image" width={300} height={200} className="rounded-md mb-4" />
            <p className="text-red-600 text-sm mb-2">Trending | Cards</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Etiam tincidunt mi vitae nibh dignis convallis lobortis elit</h3>
            <p className="text-gray-500 text-sm">By Admin | 2 Month ago</p>
          </div>

          {/* Forum Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="https://via.placeholder.com/300x200" alt="Forum Image" width={300} height={200} className="rounded-md mb-4" />
            <p className="text-red-600 text-sm mb-2">Trending | Cards</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Etiam tincidunt mi vitae nibh dignis convallis lobortis elit</h3>
            <p className="text-gray-500 text-sm">By Admin | 2 Month ago</p>
          </div>

          {/* Forum Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="https://via.placeholder.com/300x200" alt="Forum Image" width={300} height={200} className="rounded-md mb-4" />
            <p className="text-red-600 text-sm mb-2">Trending | Cards</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Etiam tincidunt mi vitae nibh dignis convallis lobortis elit</h3>
            <p className="text-gray-500 text-sm">By Admin | 2 Month ago</p>
          </div>
        </div>
      </div>
    </section>
  );
}
