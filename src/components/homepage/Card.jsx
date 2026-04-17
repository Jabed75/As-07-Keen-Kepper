import React, { useEffect, useState } from 'react';
import TimeLineCard from '../ui/TimeLineCard';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router';

const Card = () => {
    const [timelines, setTimelines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
                const res = await fetch('/friend.json');
                const data = await res.json();
                setTimelines(data);

                setTimeout(()=>{
                    setTimelines(data);
                    setLoading(false);
                }, 2000);
                
            
        };
        fetchData();
    }, []);
    console.log(loading, 'loading');

    return (
        <div className="p-10 bg-gray-50 min-h-screen">
           
            <h2 className='font-bold text-4xl mb-1 text-gray-800'>Your friends</h2>
            
            {loading ? (
                <BeatLoader />
            ):(
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {timelines.map((timeline, ind) => {
        
        return (
            <Link to={`/Homepage/${timeline.id}`} key={timeline.id || ind}>
                <TimeLineCard timeline={timeline} />
            </Link>
        );
    })}
</div>
            )}
            <div className='text-center mt-5'>
                <Link to={'/timeline'}>
                <button className='btn bg-purple-500 text-white'>View All</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;