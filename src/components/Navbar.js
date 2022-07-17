import React from 'react';

import { Link } from 'react-router-dom';

function Navbar () {
    return <div className='navbar'>
        <div className='navbar-phone'>
            <div className='navbar-phone__icon'><i className="fa-solid fa-phone"></i></div>
            <div className='navbar-phone__order'>
                <div className='navbar-phone__title'>Order Now</div>
                <div className='navbar-phone__number'>1900 1822</div>
            </div>
        </div>
        <ul className='navbar-list'>
            
            <li className='navbar-item'>
                <Link to='/'>Home Page</Link>
            </li>
            <li className='navbar-item'>
                <Link to='/menu'>Menu</Link>
            </li>
            <li className='navbar-item'>
                <img src='/img/logo.png' />
            </li>
            <li className='navbar-item'>
                <Link to='/tracking'>Tracking</Link>
            </li>
            <li className='navbar-item'>
                <Link to='/member'>Member</Link>
            </li>
            
        </ul>
        <div className='navbar-cart'><i className="fa-solid fa-cart-shopping"></i></div>
    </div>;
}

export default Navbar;