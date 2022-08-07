import { useContext } from "react";
import { LoginContext } from "./LoginContext";

function ReciverInformation() {

    const logincontext = useContext(LoginContext)

    const getUsers = ((JSON.parse(localStorage.getItem('users'))) ?? [])

    const user = (getUsers.find(exits => ( exits.userID === logincontext.currentID )) ?? []);


    return  <div className="payment__recive" >
                <div className='payment__add-heading'>Thông tin người nhận hàng: </div>
                <div className="payment__recive-content">
                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Họ và tên: </div>
                        <input type="text" id='name' defaultValue={user.length !== 0 ? user.fullname : undefined} className='method-content__address-number' required placeholder='Ví dụ: Nguyễn Văn A'/>
                    </div>
                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Số điện thoại: </div>
                        <input type="text" id='phone' defaultValue={user.length !== 0 ? user.phone : undefined} className='method-content__address-number' required placeholder='0123456789'/>
                    </div>
                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Email: </div>
                        <input type="text" id='email' defaultValue={user.length !== 0 ? user.email : undefined} className='method-content__address-number' required placeholder='email@gmail.com'/>
                    </div>
                </div>
            </div>
}

export default ReciverInformation;