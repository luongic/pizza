import { useNavigate } from "react-router-dom";

function Sidebar({sideON, openSide}) {

    const navigate = useNavigate()

    const hanldeOnclick = (link) => {
        openSide()
        setTimeout(() => {
            navigate(`/${link}`)
        }, 500)
        
    }

    return <div className={sideON ? "sidebar isOn hideonPC hideonTablet" : "sidebar hideonPC hideonTablet"}>
        <ul className="sidebar__list">

            <li className="sidebar__item" onClick={() => hanldeOnclick('')}>
                <i className="fa-solid fa-house"></i> <span>Trang chủ</span> 
            </li>

            <li className="sidebar__item" onClick={() => hanldeOnclick('menu')}>
                <i className="fa-solid fa-list"></i> <span> Menu </span> 
            </li>

            <li className="sidebar__item" onClick={() => hanldeOnclick('tracking/:id')}>
                <i className="fa-solid fa-magnifying-glass"></i> <span>Theo dõi đơn hàng</span> 
            </li>

            <li className="sidebar__item" onClick={() => hanldeOnclick('member')}>
                <i className="fa-solid fa-user"></i> <span>Thành viên</span> 
            </li>

        </ul>
        
    </div>

}


export default Sidebar;