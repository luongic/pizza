import React from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

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
            <ActiveNavbar to="/"><i className="fa-solid fa-house"></i> Trang Chủ</ActiveNavbar>
            <ActiveNavbar to="/menu"><i className="fa-solid fa-list"></i> Menu</ActiveNavbar>
            <li className='navbar-item'>
                <img src='/img/logo.png' />
            </li>
            <ActiveNavbar to="/tracking"><i className="fa-solid fa-magnifying-glass"></i> Theo dõi đơn hàng</ActiveNavbar>
            <ActiveNavbar to="/member"><i className="fa-solid fa-user"></i> Thành viên</ActiveNavbar>
        </ul>
        <div className='navbar-cart'><i className="fa-solid fa-cart-shopping"></i> Giỏ Hàng</div>
    </div>;
}

function ActiveNavbar({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? 'navbar-item active' : 'navbar-item'}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}


export default Navbar;