import Link from 'next/link';

export default function EventCalendar() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <section className="bg-red-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Calendar</h2>

        <div className="flex flex-col xl:flex-row justify-between items-center mb-10 space-y-4 xl:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full xl:w-auto">
            <button className="bg-white text-red-600 px-6 py-2 rounded-full hover:bg-gray-100 w-full sm:w-auto">Set Release Calendar</button>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full hover:bg-gray-100 w-full sm:w-auto">Event Calendar</button>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full xl:w-auto">
            <input type="text" placeholder="Search" className="px-4 py-2 rounded-full text-gray-800 w-full sm:w-auto" />
            <select className="px-4 py-2 rounded-full text-gray-800 w-full sm:w-auto">
              <option>Year</option>
            </select>
            <select className="px-4 py-2 rounded-full text-gray-800 w-full sm:w-auto">
              <option>Card Type</option>
            </select>
            <select className="px-4 py-2 rounded-full text-gray-800 w-full sm:w-auto">
              <option>Event Type</option>
            </select>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full hover:bg-gray-100 w-full sm:w-auto">Search Event</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Upcoming Event</h3>
            <div className="space-y-4">
              <div className="bg-white text-gray-800 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold">May 2nd of 12.30pm</p>
                  <p className="text-sm">Perth Australia</p>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">View Event</button>
              </div>
              <div className="bg-white text-gray-800 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold">May 2nd of 12.30pm</p>
                  <p className="text-sm">Perth Australia</p>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">View Event</button>
              </div>
              <div className="bg-white text-gray-800 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold">May 2nd of 12.30pm</p>
                  <p className="text-sm">Perth Australia</p>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">View Event</button>
              </div>
              <div className="bg-white text-gray-800 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold">May 2nd of 12.30pm</p>
                  <p className="text-sm">Perth Australia</p>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">View Event</button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">April 2025</span>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-200">&larr;</button>
                <button className="p-2 rounded-full hover:bg-gray-200">&rarr;</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {days.map(day => (
                <div key={day} className="font-semibold text-gray-700 text-sm">{day}</div>
              ))}
              {dates.map((date, index) => (
                <div key={index} className={`p-2 rounded-full ${date ? 'hover:bg-red-100' : ''} ${date === 2 || date === 13 || date === 22 || date === 27 ? 'bg-red-600 text-white' : ''}`}>
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
