

function ReciverInformation() {
    return  <div className="payment__recive" >
                <div className='payment__add-heading'>Thông tin người nhận hàng: </div>
                <div className="payment__recive-content">
                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Họ và tên: </div>
                        <input type="text" id='name' className='method-content__address-number' placeholder='Ví dụ: Nguyễn Văn A'/>
                    </div>
                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Số điện thoại: </div>
                        <input type="text" id='phone' className='method-content__address-number' placeholder='0123456789'/>
                    </div>
                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Email: </div>
                        <input type="text" id='email' className='method-content__address-number' placeholder='email@gmail.com'/>
                    </div>
                </div>
            </div>
}

export default ReciverInformation;