
import { useContext } from "react";
import { CartContext } from "./CartContext";
import toast from '../functions/toast';

function Voucher() {

    const context = useContext(CartContext)

    let sum = context.total;
 
    let percent = 0


    const handleVoucher = () =>{
        const voucher = document.querySelector('#voucher').value
        if (voucher === 'Pizzahut10'){
            percent = 10
            const discount = (sum*percent/100)
            context.setVoucher(discount)
            toast({
                title: "Sử dụng thành công 1 Voucher",
                message: `Áp dụng thành công voucher ${voucher} cho đơn hàng này và giảm được ${percent}% `,
                type: "info",
                duration: 3000
            })
        }
        else{
            const discount = (0)
            context.setVoucher(discount)
            toast({
                title: "Voucher không hợp lệ",
                message: `Mã nhập vào : ${voucher} không tồn tại hoặc đã được sử dụng`,
                type: "error",
                duration: 3000
            })
        }

    }

    return  <div className="payment__recive" >
                <div className='payment__add-heading'>Bạn có mã giảm giá ? </div>
                <div className="payment__recive-content">
                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Coupon/ Voucher: </div>
                        <input type="text" id='voucher' className='method-content__address-number' placeholder='Pizzahut10'/>
                    </div>
                    <div className='payment__voucher-btn' onClick={() => handleVoucher()} >Áp dụng</div>
                </div>
                
            </div>
}

export default Voucher;