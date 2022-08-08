import { Link } from "react-router-dom";

function Sidebar({sideON, openSide}) {
    return <div className={sideON ? "sidebar isOn hideonPC hideonTablet" : "sidebar hideonPC hideonTablet"}>
        <ul className="sidebar__list">

            <li className="sidebar__item">
                <Link to='/' onClick={() => openSide()}>
                    <i className="fa-solid fa-house"></i> Trang chủ
                </Link>
            </li>

            <li className="sidebar__item">
                <Link to='/menu' onClick={() => openSide()}>
                    <i className="fa-solid fa-list"></i>  Menu 
                </Link>
            </li>

            <li className="sidebar__item">
                <Link to='/tracking/:id' onClick={() => openSide()}>
                    <i className="fa-solid fa-magnifying-glass"></i> Theo dõi đơn hàng
                </Link>
            </li>

            <li className="sidebar__item">
                <Link to='/member' onClick={() => openSide()}>
                    <i className="fa-solid fa-user"></i>  Thành viên
                </Link>
            </li>

        </ul>
    </div>
}


export default Sidebar;