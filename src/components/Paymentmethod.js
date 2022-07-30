import { useState, useContext } from "react";
import { CartContext } from "./CartContext";



function Paymentmethod() {
    const context = useContext(CartContext)


    const [isActive,setActive] = useState(0)

    const paymethod = [
        {
            method: 'tiền mặt',
            img: '/img/cash.png',
            discount: 0,
        },
        {
            method: 'Visa',
            img: '/img/visa.png',
            discount: 7,
        },
        {
            method: 'ATM',
            img: '/img/atm.png',
            discount: 0,
        },
        {
            method: 'VNPay',
            img: '/img/vnpay.png',
            discount: 4,
        },
        {
            method: 'MOMO',
            img: '/img/momo.png',
            discount: 6,
        },
    ]

    const handleActive = index => {
        setActive(index)
    }

    if (context.method === 'deli') {
        return <div className="payment__method" >
                    <div className='payment__add-heading'>Phương thức thanh toán: </div>
                    <div className="payment__method-content">
                        <div className="payment__method-list" >

                            {paymethod.map((item, index) => {
                            return <div className={isActive === index ? "payment__method-item active" : "payment__method-item"} key={index} onClick = {() => handleActive(index)}>
                                        <div className="payment__method-img-contain">
                                            <img src={item.img} className="payment__method-img" alt="momopaymentpzh"></img>
                                        </div>
                                        <div className="payment__method-info">
                                            <div className="payment__method-name"> {item.discount === 0 ? `Thanh toán bằng ${item.method} ` : 
                                                                                                                `Thanh toán bằng ${item.method} - Giảm : ${item.discount}%` } </div>
                                            {isActive === index ? <div className="payment__method-price">{((context.total*1000)*(100 - item.discount)/100).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div> :
                                            <div className="payment__method-price">0 VND</div> }
                                        </div>
                                    </div> 
                                }
                            
                            )}

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
    else {
        return  <div className="payment__method" >
                    <div className='payment__add-heading'>Phương thức thanh toán: </div>
                    <div className="payment__method-content">
                        <div className="payment__method-list" >

                            

                            {paymethod.map((item, index) => {
                                
                                    return (item.method === 'MOMO' ? <div key={index}></div> : 
                                    <div className={isActive === index ? "payment__method-item active" : "payment__method-item"} key={index} onClick = {() => handleActive(index)}>
                                        <div className="payment__method-img-contain">
                                            <img src={item.img} className="payment__method-img" alt="momopaymentpzh"></img>
                                        </div>
                                        <div className="payment__method-info">
                                            <div className="payment__method-name"> {item.discount === 0 ? `Thanh toán bằng ${item.method} ` : 
                                                                                                                `Thanh toán bằng ${item.method} - Giảm : ${item.discount}%` } </div>
                                            {isActive === index ? <div className="payment__method-price">{((context.total*1000)*(100 - item.discount)/100).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div> :
                                            <div className="payment__method-price">0 VND</div> }
                                        </div>
                                    </div> )
                                }
                            
                            ) }

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


    
}

export default Paymentmethod;