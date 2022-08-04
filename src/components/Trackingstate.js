
const stateList = [
    {
        id: 0,
        name: 'Đơn hàng đã được tạo',
        icon: 'fa-solid fa-file-invoice',
    },
    {
        id: 1,
        name: 'Đã xác nhận đơn hàng',
        icon: 'fa-solid fa-clipboard-check',
    },
    {
        id: 2,
        name: 'Nhà hàng đang chuẩn bị món ăn',
        icon: 'fa-solid fa-kitchen-set',
    },
    {
        id: 3,
        name: 'Món ăn đang được giao',
        icon: 'fa-solid fa-truck-fast',
    },
    {
        id: 4,
        name: 'Đơn hàng đã được hoàn tất',
        icon: 'fa-solid fa-utensils',
    },
]

function Trackingstate({state}) {
    return  <div className='tracking__contain-display'>
                <div className="tracking__state">
                    <div className="tracking__state-heading">Trạng thái đơn hàng</div>
                    <div className="tracking__list">


                        {stateList.map((item, index) => {
                            return  <div className={ item.id <= state ? (item.id === state ? 'tracking__item active curent' : 'tracking__item active' ) : 'tracking__item'} key={index}>
                                        <div className="tracking__item-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="tracking__item-text">
                                            {item.name}
                                        </div>
                                    </div>
                        })}

                    </div>
                </div>
            </div>
}



export default Trackingstate;