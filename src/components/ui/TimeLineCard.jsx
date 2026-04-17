import React from 'react';

const TimeLineCard = ({ timeline }) => {
    return (
        <div className="card bg-white shadow-xl border border-gray-100 flex flex-col items-center text-center rounded-3xl p-6 transition-all hover:shadow-2xl">
            
           
            <figure className="mt-4 mb-4">
                <img
                    src={timeline.picture}
                    alt={timeline.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
            </figure>

            <div className="flex flex-col items-center w-full">
              
                <h2 className="font-bold text-2xl text-gray-800 mb-1">{timeline.name}</h2>
                
                
                <p className="text-gray-400 text-sm mb-4">{timeline.days_since_contact}d ago</p>

               
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {timeline.tags && timeline.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase">
                            {tag}
                        </span>
                    ))}
                </div>

                
                <div className="w-full">
                    <button className={`px-4 py-1 rounded-full text-white font-bold text-sm capitalize border-none ${
                        timeline.status === 'overdue' ? 'bg-red-500 hover:bg-red-600' : 
                        timeline.status === 'almost due' ? 'bg-orange-400 hover:bg-orange-500' : 
                        'bg-emerald-500 hover:bg-emerald-600'
                    }`}>
                        {timeline.status}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimeLineCard;