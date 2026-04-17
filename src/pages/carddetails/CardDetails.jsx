import React, { use } from 'react';
import { useParams } from 'react-router';
import { Phone, MessageSquare, Video, Clock, Trash2 } from 'lucide-react'; 
import { toast } from 'react-toastify';

const FriendsPromise = fetch('/friend.json')
.then((res) => res.json());

const CardDetails = () => {
    const { id } = useParams();
    const friends = use(FriendsPromise);
    const friend = friends.find((f) => f.id == id);

    if (!friend) return <div className="p-8 text-center">Friend not found</div>;

   const handleCheckIn = (type) => {
    const newActivity = {
        id: Date.now(),
        type: type,
        person: friend.name,
        date: new Date().toLocaleDateString('en-US', { 
            month: 'long', day: 'numeric', year: 'numeric' 
            
        }),
        
    };

    const savedTimeline = JSON.parse(localStorage.getItem('timeline') || '[]');
    localStorage.setItem('timeline', JSON.stringify([newActivity, ...savedTimeline]));

    
    window.dispatchEvent(new Event('storage_updated'));

    alert(`${type} added to timeline!`);
    toast.success(`${type} added to timeline!`);
};

    return (
        <div className="max-w-4xl mx-auto p-6 bg-slate-50 min-h-screen">
            <div className="grid grid-cols-12 gap-4">
                
                <div className="col-span-12 md:col-span-4 space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-slate-100"
                        />
                        <h2 className="text-xl font-bold text-slate-800">{friend.name}</h2>
                        
                        <div className="mt-2">
                            <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-wider text-white ${
                                friend.status === 'overdue' ? 'bg-red-500' : 'bg-emerald-500'
                            }`}>
                                {friend.status}
                            </span>
                        </div>
                        <p className="mt-4 text-slate-500 italic text-sm font-serif">
                            "{friend.note || "Former colleague, great mentor"}"
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden text-sm">
                        <button className="w-full p-3 flex items-center justify-center gap-2 hover:bg-slate-50 border-b border-slate-100 text-slate-600">
                            <Clock size={16} /> Snooze 2 Weeks
                        </button>
                        <button className="w-full p-3 flex items-center justify-center gap-2 hover:bg-red-50 text-red-500">
                            <Trash2 size={16} /> Delete
                        </button>
                    </div>
                </div>

                
                <div className="col-span-12 md:col-span-8 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                            <p className="text-2xl font-bold text-slate-800">{friend.days_since_contact}</p>
                            <p className="text-[10px] text-slate-400 uppercase font-medium">Days Since</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                            <p className="text-2xl font-bold text-slate-800">{friend.goal}</p>
                            <p className="text-[10px] text-slate-400 uppercase font-medium">Goal</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                            <p className="text-xl font-bold text-emerald-800">{friend.next_due_date}</p>
                            <p className="text-[10px] text-slate-400 uppercase font-medium">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-sm font-bold text-slate-700 mb-4 font-serif italic">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleCheckIn('Call')} className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 hover:bg-pink-50 hover:text-pink-600 transition-all gap-2 text-slate-600">
                                <Phone size={20} /> <span className="text-xs font-medium">Call</span>
                            </button>
                            <button onClick={() => handleCheckIn('Text')} className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 hover:bg-pink-50 hover:text-pink-600 transition-all gap-2 text-slate-600">
                                <MessageSquare size={20} /> <span className="text-xs font-medium">Text</span>
                            </button>
                            <button onClick={() => handleCheckIn('Video')} className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 hover:bg-pink-50 hover:text-pink-600 transition-all gap-2 text-slate-600">
                                <Video size={20} /> <span className="text-xs font-medium">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;