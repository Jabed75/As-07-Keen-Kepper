import React from 'react';
import { NavLink } from 'react-router';

const MyNavlink = ({to, className, children}) => {
    return (
         <NavLink to={to} 
                            className={({isActive})=>{
                                return`font-semibold pb-2 ${className} ${isActive ? 'bg-[#244D3F] text-purple-500 border-b border-purple-500': ""}`
                            }}>{children}</NavLink>
    );
};

export default MyNavlink;