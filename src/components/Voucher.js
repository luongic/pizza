
function Voucher() {
    return  <div className="payment__recive" >
                <div className='payment__add-heading'>Bạn có mã giảm giá ? </div>
                <div className="payment__recive-content">
                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Coupon/ Voucher: </div>
                        <input type="text" id='voucher' className='method-content__address-number' placeholder='PIZZAHUT****'/>
                    </div>
                    <div className='payment__voucher-btn' >Áp dụng</div>
                </div>
                
            </div>
}

export default Voucher;