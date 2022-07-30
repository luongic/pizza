import { useState, useContext } from "react";
import { CartContext } from "./CartContext";



function Paymentmethod() {
    const context = useContext(CartContext)

    const totalPrice = context.total
    const totalfee = context.delifee
    const total = context.total
    console.log(totalPrice);
    console.log(totalfee);
    console.log(total);

    const paymethod = [
        {
            method: 'tiền mặt',
            img: '/img/cash.png',

        },
        {
            method: 'Visa',
            img: '/img/visa.png',

        },
        {
            method: 'ATM',
            img: '/img/atm.png',

        },
        {
            method: 'VNPay',
            img: '/img/vnpay.png',

        },
        {
            method: 'MOMO',
            img: '/img/momo.png',

        },
    ]


    return  <div className="payment__method" >
                <div className='payment__add-heading'>Phương thức thanh toán: </div>
                <div className="payment__method-content">
                    <div className="payment__method-list" >


                        {paymethod.map((item, index) => {
                            return <div className="payment__method-item" key={index}>
                            <div className="payment__method-img-contain">
                                <img src={item.img} className="payment__method-img" alt="momopaymentpzh"></img>
                            </div>
                            <div className="payment__method-info">
                                <div className="payment__method-name">Thanh toán bằng {item.method}</div>
                                <div className="payment__method-price">{totalPrice}</div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
                <div className="payment__method-provision">
                    <input type="checkbox" id="accept" name="provision" value="provision" />
                    <div htmlFor="provision"> 
                        <a href="https://pizzahut.vn/info?TNC">Tôi đồng ý với các điều khoản và điều kiện</a>
                    </div>
                </div>
                <div className="payment__method-btn">Đặt hàng</div>
            </div>
}

export default Paymentmethod;