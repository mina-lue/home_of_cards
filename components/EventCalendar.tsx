import Link from 'next/link';

export default function EventCalendar() {
  return (
    <section className="bg-[#C82020] py-20 text-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <span className="font-bold tracking-widest text-sm mb-2 opacity-90 uppercase">Set Date</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Calendar</h2>
            <p className="text-red-100 max-w-lg">Find every card in your favorite - Organized, Searchable, and Sortable.</p>
          </div>
          
          <div className="flex border border-red-300 rounded-lg overflow-hidden mt-6 md:mt-0">
             <button className="bg-white text-red-700 px-6 py-3 font-semibold text-sm flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Set Release Calendar
             </button>
             <button className="bg-transparent text-white px-6 py-3 font-semibold text-sm hover:bg-red-700 transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Event Calendar
             </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
            <div className="md:col-span-1 flex items-center">
                 <h3 className="text-2xl font-bold">Search</h3>
            </div>
            
            <div className="md:col-span-2">
                 <div className="relative">
                    <select className="w-full bg-[#B91C1C] border border-[#d63030] text-white py-3 px-4 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white">
                        <option>Year</option>
                        <option>2025</option>
                        <option>2024</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            <div className="md:col-span-3">
                 <div className="relative">
                    <select className="w-full bg-[#B91C1C] border border-[#d63030] text-white py-3 px-4 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white">
                        <option>Event Type</option>
                    </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

             <div className="md:col-span-3">
                 <div className="relative">
                    <select className="w-full bg-[#B91C1C] border border-[#d63030] text-white py-3 px-4 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white">
                        <option>Card Type</option>
                    </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>
            
             <div className="md:col-span-3">
                 <div className="relative">
                    <input type="text" placeholder="Search Event" className="w-full bg-[#B91C1C] border border-[#d63030] text-white py-3 px-4 rounded-lg placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-white" />
                     <div className="absolute inset-y-0 right-0 flex items-center px-4">
                        <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Upcoming Events List */}
           <div>
               <h3 className="text-2xl font-bold mb-6">Upcoming Event</h3>
               
               <div className="space-y-4">
                   <EventCard date="May 2nd of 12.30pm" location="Perth Australis" active={false} />
                   <EventCard date="May 2nd of 12.30pm" location="Perth Australis" active={true} />
                   <EventCard date="May 2nd of 12.30pm" location="Perth Australis" active={false} />
                   <EventCard date="May 2nd of 12.30pm" location="Perth Australis" active={false} />
               </div>
           </div>

           {/* Calendar Widget */}
           <div>
               <div className="flex justify-between items-center mb-6">
                   <div className="flex space-x-4">
                       <span className="text-xl font-bold">APRIL</span>
                       <span className="text-xl font-light">2025</span>
                   </div>
                   <div className="flex space-x-2">
                       <button className="w-8 h-8 rounded-full bg-[#a11818] flex items-center justify-center hover:bg-[#8a1414] transition">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                       </button>
                        <button className="w-8 h-8 rounded-full bg-white text-red-700 flex items-center justify-center hover:bg-gray-200 transition">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                       </button>
                   </div>
               </div>

               <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold mb-3 text-red-200">
                   <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
               </div>
               
               <div className="grid grid-cols-7 gap-2 text-center font-medium">
                   {/* Empty start cells */}
                   <div></div><div></div><div></div><div></div>
                   
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">1</div>
                   <div className="aspect-square flex items-center justify-center bg-white text-red-700 rounded-lg shadow-md font-bold cursor-pointer">2</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">3</div>
                   
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">4</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">5</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">6</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">7</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">8</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">9</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">10</div>

                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">11</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">12</div>
                   <div className="aspect-square flex items-center justify-center bg-white text-red-700 rounded-lg shadow-md font-bold cursor-pointer">13</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">14</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">15</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">16</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">17</div>

                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">18</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">19</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">20</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">21</div>
                   <div className="aspect-square flex items-center justify-center bg-white text-red-700 rounded-lg shadow-md font-bold cursor-pointer">22</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">23</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">24</div>

                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">25</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">26</div>
                   <div className="aspect-square flex items-center justify-center bg-white text-red-700 rounded-lg shadow-md font-bold cursor-pointer">27</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">28</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">29</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">30</div>
                   <div className="aspect-square flex items-center justify-center border border-red-500/30 rounded-lg hover:bg-red-700/50 cursor-pointer">31</div>
               </div>
           </div>
        </div>

      </div>
    </section>
  );
}

function EventCard({ date, location, active }: { date: string, location: string, active: boolean }) {
    if (active) {
        return (
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex justify-between items-center transform scale-105 transition">
                <div>
                   <h4 className="text-lg font-bold text-red-700">{date}</h4>
                   <p className="text-gray-500 text-sm">{location}</p>
                </div>
                <button className="bg-[#C82020] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-800 transition">View Event</button>
            </div>
        )
    }
    return (
        <div className="bg-[#b91c1c] border border-red-500/50 text-white p-5 rounded-lg flex justify-between items-center opacity-80 hover:opacity-100 transition">
             <div>
                   <h4 className="text-lg font-bold">{date}</h4>
                   <p className="text-red-200 text-sm">{location}</p>
            </div>
             <button className="text-sm border border-red-300 px-4 py-2 rounded hover:bg-white hover:text-red-700 transition">View Event</button>
        </div>
    )
}
