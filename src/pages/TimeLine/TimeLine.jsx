import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react'; 

const TimeLine = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const loadTimeline = () => {
            const savedData = JSON.parse(localStorage.getItem('timeline') || '[]');
            setActivities(savedData);
        };
        loadTimeline();

        window.addEventListener('storage_updated', loadTimeline);
        window.addEventListener('storage', loadTimeline);

        return () => {
            window.removeEventListener('storage_updated', loadTimeline);
            window.removeEventListener('storage', loadTimeline);
        };
    }, []);

    const deleteItem = (id) => {
        const remaining = activities.filter(item => item.id !== id);
        localStorage.setItem('timeline', JSON.stringify(remaining));
        setActivities(remaining);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-8  pb-4 text-slate-800 ">Timeline Activity</h1>

            <details className="dropdown">
  <summary className="btn m-1">Filter Time line</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Text 1</a></li>
    <li><a>Text 2</a></li>
  </ul>
</details>
            
            
            <div className="flex flex-col gap-4">
                {activities.length === 0 ? (
                    <div className="py-20 text-center">
                        <p className="text-slate-400 italic bg-slate-50 p-10 rounded-2xl border border-dashed border-slate-200 text-2xl font-medium">
                            No Data Found
                        </p>
                    </div>
                ) : (
                    activities.map((item) => (
                        <div key={item.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            
                            
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-pink-200 hover:shadow-md transition-all">
                                <div className="flex items-center gap-5">
                                    <div className="text-2xl bg-slate-50 p-3 rounded-xl">
                                        {item.type === 'Call' ? '📞' : item.type === 'Text' ? '💬' : '📹'}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-700 leading-tight">
                                            {item.type} with {item.person}
                                        </h4>
                                        <p className="text-sm text-slate-400 mt-1">{item.date}</p>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => deleteItem(item.id)}
                                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                                    title="Delete"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TimeLine;