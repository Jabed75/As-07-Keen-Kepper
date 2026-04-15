import React from 'react';

const Banner = () => {
    return (

        <div className="bg-[#f8fbff] min-h-screen p-4 md:p-8">
            <div className="container mx-auto">
                
                <div className="text-center py-12 px-4  rounded-lg mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-4">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the 
                        relationships that matter most.
                    </p>
                    <button className="bg-[#1d4d3f] text-white px-6 py-2.5 rounded-md font-medium flex items-center gap-2 mx-auto hover:bg-[#153a2f] transition-all">
                        <span className="text-xl">+</span> Add a Friend
                    </button>
                </div>
              
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2  rounded-lg p-6">
                                     
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center">
                        <h2 className="text-2xl font-bold text-[#1d4d3f] mb-1">10</h2>
                        <p className="text-gray-500 text-sm font-medium">Total Friends</p>
                    </div>
           
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                        <h2 className="text-2xl font-bold text-[#1d4d3f] mb-1">3</h2>
                        <p className="text-gray-500 text-sm font-medium">On Track</p>
                    </div>
                  
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                        <h2 className="text-2xl font-bold text-[#1d4d3f] mb-1">6</h2>
                        <p className="text-gray-500 text-sm font-medium">Need Attention</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                        <h2 className="text-2xl font-bold text-[#1d4d3f] mb-1">12</h2>
                        <p className="text-gray-500 text-sm font-medium">Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Banner;