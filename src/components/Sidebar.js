import { useNavigate } from "react-router-dom";

function Sidebar({sideON, openSide}) {

    const navigate = useNavigate()

    const hanldeOnclick = (link) => {
        openSide()
        navigate(`/${link}`)
    }

    return <div className={sideON ? "sidebar isOn hideonPC hideonTablet" : "sidebar hideonPC hideonTablet"}>
        <ul className="sidebar__list">

            <li className="sidebar__item" onClick={() => hanldeOnclick('')}>
                <i className="fa-solid fa-house"></i> Trang chủ
            </li>

            <li className="sidebar__item" onClick={() => hanldeOnclick('menu')}>
                <i className="fa-solid fa-list"></i>  Menu 
            </li>

            <li className="sidebar__item" onClick={() => hanldeOnclick('tracking/:id')}>
                <i className="fa-solid fa-magnifying-glass"></i> Theo dõi đơn hàng
            </li>

            <li className="sidebar__item" onClick={() => hanldeOnclick('member')}>
                <i className="fa-solid fa-user"></i>  Thành viên
            </li>

        </ul>
        
    </div>

}


export default Sidebar;