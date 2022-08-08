import React from 'react';
import Navcart from './Navcart';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function Navbar ({openSide}) {
    
    return <div className='navbar'>
        <div className='navbar-phone  hideonMobile'>
            <div className='navbar-phone__icon'>
                <i className="fa-solid fa-phone "></i>
            </div>
            <div className='navbar-phone__order hideonTablet'>
                <div className='navbar-phone__title'> Đặt ngay</div>
                <a href='tel:19001822' className='navbar-phone__number'>1900 1822</a>
            </div>
        </div>

        <div className='navbar-bar hideonPC hideonTablet' onClick={() => openSide()}>
                <i class="fa-solid fa-bars hideonPC"></i>
        </div>



        <ul className='navbar-list'>
            <ActiveNavbar to="/"><i className="fa-solid fa-house"></i> <span className='hideonTablet hideonMobile '> Trang Chủ </span> </ActiveNavbar>
            <ActiveNavbar to="/menu"><i className="fa-solid fa-list"></i><span className='hideonTablet hideonMobile '>  Menu </span></ActiveNavbar>
            <li className='navbar-item'>
                <Link to='/'>
                    <img src='/img/logo.png' alt='logoPizzaHut'/>
                </Link>
            </li>
            <ActiveNavbar to="/tracking/:id"><i className="fa-solid fa-magnifying-glass"></i><span className='hideonTablet hideonMobile '>  Theo dõi đơn hàng </span></ActiveNavbar>
            <ActiveNavbar to="/member"><i className="fa-solid fa-user"></i><span className='hideonTablet hideonMobile '>  Thành viên </span></ActiveNavbar>
        </ul>
        <div className='navbar-cart' >
            <Navcart />
        </div>
    </div>;
}

function ActiveNavbar({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? 'navbar-item active hideonMobile' : 'navbar-item hideonMobile'}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}


export default Navbar;