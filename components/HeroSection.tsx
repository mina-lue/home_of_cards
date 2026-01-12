import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Cards Section - Moved to Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Box Checklist Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Box Checklist</h3>
            <div className="space-y-2 text-left">
              <p className="flex items-center"><span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>Category</p>
              <p className="flex items-center"><span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>Brand</p>
              <p className="flex items-center"><span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>Year</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">Completion <span className="font-bold text-red-600">76%</span></p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>
          </div>

          {/* 1x1 Tracker Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">1x1 Tracker</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <Image src="/bit.png" alt="Card" width={80} height={120} />
              <Image src="/bit.png" alt="Card" width={80} height={120} />
            </div>
            <div className="mt-4">
              <p className="text-gray-600">Completion <span className="font-bold text-red-600">70%</span></p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

          {/* Sell Any Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Sell Any Card</h3>
            <Image src="/bit.png" alt="Card" width={120} height={180} className="mb-4" />
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">List for Sale</button>
          </div>

          {/* Grading Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Grading</h3>
            <Image src="/bit.png" alt="Grading Chart" width={150} height={100} className="mb-4" />
            <Link href="#" className="text-red-600 hover:underline">View Grading</Link>
          </div>
        </div>

        {/* Text and Buttons - Moved to Bottom */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">Your Collection, Your Tools,<br className="block md:hidden"/>Your Community</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">Discover, organize, and value your card collection with ease.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 w-full md:w-auto">Explore Cards</button>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg hover:bg-gray-900 w-full md:w-auto">Learn More</button>
        </div>
      </div>
    </section>
  );
}
