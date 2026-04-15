import React, {  useEffect, useState } from 'react';

const Card = () => {
    const [timelines, setTimelines] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friend.json');
            const data = await res.json();
            setTimelines(data);
        };
        fetchData();
    }, []);

    return (
        <div className="p-10 bg-gray-50 min-h-screen">
            {/* ১. টাইটেলটি এখন সবার উপরে থাকবে */}
            <h2 className='font-bold text-4xl mb-2'>Your friends</h2>
           

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {timelines.map((timeline, ind) => {
                    return (
                        <div key={timeline.id || ind} className="card bg-white shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center rounded-2xl">
                            
                            <figure className="mb-4">
                                <img
                                    src={timeline.picture}
                                    alt={timeline.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                                />
                            </figure>

                            <div className="card-body p-0 items-center">
                                <h2 className="card-title font-bold text-2xl mb-1">{timeline.name}</h2>
                                <p className="text-gray-400 text-sm mb-4">{timeline.days_since_contact}d ago</p>

                                <div className="flex flex-wrap gap-2 justify-center mb-5">
                                    {timeline.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                
                                <div className="card-actions">
                                    <button className={`btn btn-sm px-6 rounded-full text-white font-bold capitalize border-none ${
                                        timeline.status === 'overdue' ? 'bg-red-500' : 
                                        timeline.status === 'almost due' ? 'bg-orange-400' : 'bg-emerald-500'
                                    }`}>
                                        {timeline.status}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;