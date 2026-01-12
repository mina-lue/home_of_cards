import Image from 'next/image';
import Link from 'next/link';

export default function TrackerTool() {
  return (
    <section className="bg-red-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Tracker Tool</h2>
          <button className="bg-white text-red-600 px-6 py-2 rounded-full hover:bg-gray-100">Filter</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tracker Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col items-center">
            <Image src="/tracker-placeholder.png" alt="Set Image" width={200} height={150} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Set 1</h3>
            <p className="text-sm mb-4">10/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-4">
              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">View Tracker</button>
          </div>

          {/* Tracker Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col items-center">
            <Image src="/tracker-placeholder.png" alt="Set Image" width={200} height={150} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Set 1</h3>
            <p className="text-sm mb-4">15/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-4">
              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">View Tracker</button>
          </div>

          {/* Tracker Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col items-center">
            <Image src="/tracker-placeholder.png" alt="Set Image" width={200} height={150} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Set 1</h3>
            <p className="text-sm mb-4">20/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-4">
              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">View Tracker</button>
          </div>

          {/* Tracker Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col items-center">
            <Image src="/tracker-placeholder.png" alt="Set Image" width={200} height={150} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Set 1</h3>
            <p className="text-sm mb-4">25/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-4">
              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">View Tracker</button>
          </div>
        </div>
      </div>
    </section>
  );
}
