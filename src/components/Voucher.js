
import { useContext} from "react";
import { CartContext } from "./CartContext";

function Voucher() {

    const context = useContext(CartContext)

    const bills = ((JSON.parse(localStorage.getItem('bill'))) ?? [])

    let sum = 0;

    if (bills !== null){
        bills.forEach(element => {
            sum += element.price * element.quantity;
        });
    }

    const handleVoucher = () =>{
        const voucher = document.querySelector('#voucher').value
        const percent = 10
        if (voucher === 'Pizzahut10'){
            const discount = (sum*percent/100)
            const total = sum - discount
            context.setTotal(total)
            context.setVoucher(discount)
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