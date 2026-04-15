import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import MyNavlink from './MyNavlink';

const Navbar = () => {
    return (
        <nav className='shadow'>
           <div className='flex justify-between items-center bg-white shadow py-[8px] container mx-auto'>
             <img src={logo} alt="" />
            <ul className='flex gap-3'>
                <li>
                  <MyNavlink to={'/'}>Home</MyNavlink>
                </li>
                <li>
                    <MyNavlink to={'/timeline'} className={''}>TimeLine</MyNavlink>
                </li>
                <li>
                    <MyNavlink to={'/stats'}>Stats</MyNavlink>
                </li>
            </ul>
           </div>
        </nav>
    );
};

export default Navbar;