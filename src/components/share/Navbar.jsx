import React from 'react';
import logo from '../../assets/logo.png'

import MyNavlink from './MyNavlink';
import { CiAlarmOn } from "react-icons/ci";
import { RiHome6Line } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    return (
        <nav className='shadow'>
           <div className='flex justify-between items-center bg-white shadow py-[8px] container mx-auto'>
             <img src={logo} alt="" />
            <ul className='flex gap-4 rounded-lg p-3'>
                <li>
                  <MyNavlink to={'/'} className='flex items-center px-5 py-2.5 rounded-lg'>
                  <RiHome6Line />
                  <span className='text-xl'>Home</span>
                  </MyNavlink>
                </li>
               <li>
                 <MyNavlink  to='/timeline'  className='flex items-center px-5 py-2.5 rounded-lg'>
                 <CiAlarmOn />
               <span className='text-xl'>TimeLine</span>
           </MyNavlink>
             </li>
                <li>
                    <MyNavlink to={'/stats'} className='flex items-center px-5 py-2.5 rounded-lg'>
                    <ImStatsDots />
                    <span className='text-xl '> Stats</span>
                   </MyNavlink>
                </li>
            </ul>
           </div>
        </nav>
    );
};

export default Navbar;