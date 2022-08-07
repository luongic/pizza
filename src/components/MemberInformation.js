import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

function MemberInformation () {

    const logincontext = useContext(LoginContext)

    const navigate = useNavigate()

    const getUsers = ((JSON.parse(localStorage.getItem('users'))) ?? [])

    const user = getUsers.find(exits => ( exits.userID === logincontext.currentID ));

    const orders = ((JSON.parse(localStorage.getItem('orders'))) ?? [])

    const userOrders = orders.filter(order => order.phone === user.phone)

    function formatDate (input) {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(), // get only two digits
        month = datePart[1], day = datePart[2];
      
        return day+'/'+month+'/'+year;
    }

    const DOB = formatDate(user.birtday)

    return <div className="member">
        <div className="member__contain">
            <div className="member__heading">Thông tin thành viên</div>
            <div className="member__content">
                <div className="member__content-name">Tên: {user.fullname}</div>
                <div className="member__content-birth">Ngày sinh: {DOB}</div>
                <div className="member__content-gender">Giới tính: {user.gender === 'male' ? 'Nam' : 'Nữ'}</div>
                <div className="member__content-phone">Số điện thoại: {user.phone}</div>
                <div className="member__content-email">Email: {user.email}</div>
            </div>

        </div>

        <div className="member__history">
                <div className="member__history-heading">Lịch sử đặt hàng</div>

                {userOrders.length !== 0 ? <table className="member__history-list">
                    <tbody>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Tổng</th>
                            <th>Trạng thái</th>
                            <th>Hình thức thanh toán</th>
                            <th>Voucher sử dụng</th>
                            <th>Trạng thái đơn hàng</th>
                        </tr>

                        {userOrders.map(item => {
                            return <tr key={item.orderID}>
                                        <td> #{item.orderID}</td>
                                        <td>{item.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                                        <td>{item.paymentstatus === 'paid' ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                                        <td>{item.paymentmethod}</td>
                                        <td>{item.voucher === 'novoucher' ? '' : item.voucher}</td>
                                        <td><span className="member__history-link" onClick={() => navigate(`/tracking/${item.orderID}`)}  >Xem tại đây</span></td>
                                    </tr>
                        })}
                    </tbody>

                </table>
                 : <div>Chưa có đơn hàng nào</div> }

                

            </div>
    </div>

}

export default MemberInformation;