import Image from 'next/image';
import Link from 'next/link';

export default function SetChecklists() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Set Checklists</h2>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 text-sm md:text-base">Filter</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Set Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image src="https://via.placeholder.com/200x150" alt="Set Image" width={200} height={150} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Name</h3>
            <p className="text-gray-600 text-sm mb-4">Litotio Jocto 2025</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Download</button>
          </div>

          {/* Set Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image src="https://via.placeholder.com/200x150" alt="Set Image" width={200} height={150} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Name</h3>
            <p className="text-gray-600 text-sm mb-4">Litotio Jocto 2025</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Download</button>
          </div>

          {/* Set Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image src="https://via.placeholder.com/200x150" alt="Set Image" width={200} height={150} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Name</h3>
            <p className="text-gray-600 text-sm mb-4">Litotio Jocto 2025</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Download</button>
          </div>

          {/* Set Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image src="https://via.placeholder.com/200x150" alt="Set Image" width={200} height={150} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Name</h3>
            <p className="text-gray-600 text-sm mb-4">Litotio Jocto 2025</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Download</button>
          </div>
        </div>
      </div>
    </section>
  );
}
