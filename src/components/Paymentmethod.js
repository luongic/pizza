import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

import toast from "../functions/toast";
import generateOrderID from "../functions/generateOrderID";

function Paymentmethod() {
    const context = useContext(CartContext)


    const [isActive,setActive] = useState(0)

    const paymethod = [
        {
            name: 'tiền mặt',
            img: '/img/cash.png',
            discount: 0,
            method: 'cash',
        },
        {
            name: 'Visa',
            img: '/img/visa.png',
            discount: 0,
            method: 'visa',
        },
        {
            name: 'ATM',
            img: '/img/atm.png',
            discount: 0,
            method: 'atm',
        },
        {
            name: 'VNPay',
            img: '/img/vnpay.png',
            discount: 0,
            method: 'vnpay',
        },
        {
            name: 'MOMO',
            img: '/img/momo.png',
            discount: 0,
            method: 'momo',
        },
    ]

    const handleActive = (index, method) => {
        context.setPaymentmethod(method)
        setActive(index)
    }

    const [isChecked, setIschecked] = useState(false)

    const handleInputCheck = e =>{
        if (e.target.checked) {
            setIschecked(true)
        } else {
            setIschecked(false)
        }
    }
    const navigate = useNavigate();

    const handleSubmit = () => {
        const name = document.getElementById("name").value
        const phone = document.getElementById("phone").value
        const email = document.getElementById("email").value
        
        if (name === ''){
            toast({
                title: "Vui lòng nhập tên",
                message: `Tên không được để trống`,
                type: "warning",
                duration: 3000
            })
            document.getElementById("name").focus()
            return
        }
   
        else if (phone === ''){
            toast({
                title: "Vui lòng nhập số điện thoại",
                message: `SĐT không được để trống`,
                type: "warning",
                duration: 3000
            })
            document.getElementById("phone").focus()
            return
        }
    
        else if (email === ''){
            toast({
                title: "Vui lòng nhập email",
                message: `email không được để trống`,
                type: "warning",
                duration: 3000
            })
            document.getElementById("email").focus()
            return
        }

        else {
            const orderID = generateOrderID()
            const addressNote = document.querySelector('#addressnote').value
            const billNote = document.querySelector('#billnote').value
            const method = localStorage.getItem('method')
            const address = document.querySelector('.payment__add-detail').textContent
            const total = (context.total*1000)
            const paymentmethod = context.paymentmethod
            const bill = (JSON.parse(localStorage.getItem('bill')))
            const paymentstatus = (paymentmethod === 'cash' ? 'unpaid' : 'paid')
            const voucher = (document.querySelector('#voucher').value === '' ? 'novoucher' : document.querySelector('#voucher').value)

            const newOrder = {
                orderID: orderID,
                name: name,
                phone: phone,
                email: email,
                method: method,
                address: address,
                addressNote: addressNote,
                bill: bill,
                billNote: billNote,
                voucher: voucher,
                total: total,
                paymentmethod: paymentmethod,
                paymentstatus: paymentstatus,
                state: 'order', //order -> confirm -> preparing -> delivery -> done : SUCCESS
                                //order -> confirm -> delete                        : CANCEL
            }

            const getOrder = ((JSON.parse(localStorage.getItem('orders'))) ?? [])
            getOrder.push(newOrder)
            localStorage.setItem('orders', JSON.stringify(getOrder))

            console.log(newOrder.bill);

            if (paymentmethod === 'cash'){
                navigate(`/receipt/${orderID}`);
            }
            else {
                navigate(`/paying/${paymentmethod}/${orderID}`)
            }
        }
        

    }

    if (context.method === 'deli') {
        return <div className="payment__method" >
                    <div className='payment__add-heading'>Phương thức thanh toán: </div>
                    <div className="payment__method-content">
                        <div className="payment__method-list" >

                            {paymethod.map((item, index) => {
                            return <div className={isActive === index ? "payment__method-item active" : "payment__method-item"} key={index} onClick = {() => handleActive(index, item.method)}>
                                        <div className="payment__method-img-contain">
                                            <img src={item.img} className="payment__method-img" alt="momopaymentpzh"></img>
                                        </div>
                                        <div className="payment__method-info">
                                            <div className="payment__method-name"> {item.discount === 0 ? `Thanh toán bằng ${item.name} ` : 
                                                                                                                `Thanh toán bằng ${item.name} - Giảm : ${item.discount}%` } </div>
                                            {isActive === index ? <div className="payment__method-price">{((context.total*1000)*(100 - item.discount)/100).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div> :
                                            <div className="payment__method-price">0 VND</div> }
                                        </div>
                                    </div> 
                                }
                            
                            )}

                        </div>
                    </div>
                    <div className="payment__method-provision">
                        <input type="checkbox" id="accept" name="provision" value="provision" onChange={e => handleInputCheck(e)} required/>
                        <div htmlFor="provision"> 
                            <a href="https://pizzahut.vn/info?TNC" target="_blank" rel="noopener noreferrer">Tôi đồng ý với các điều khoản và điều kiện</a>
                        </div>
                    </div>
                    {isChecked === true ? <button className="payment__method-btn" onClick={() => handleSubmit()} >Đặt hàng</button> : <button className="payment__method-btn-disable" disabled >Đặt hàng</button> }
                    
                </div>
    }
    else {
        return  <div className="payment__method" >
                    <div className='payment__add-heading'>Phương thức thanh toán: </div>
                    <div className="payment__method-content">
                        <div className="payment__method-list" >
                            {paymethod.map((item, index) => 
                                {
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
                            
                            )}

                        </div>
                    </div>
                    <div className="payment__method-provision">
                        <input type="checkbox" id="accept" name="provision" value="provision" onChange={e => handleInputCheck(e)} required/>
                        <div htmlFor="provision"> 
                            <a href="https://pizzahut.vn/info?TNC">Tôi đồng ý với các điều khoản và điều kiện</a>
                        </div>
                    </div>
                    {isChecked === true ? <button className="payment__method-btn" onClick={() => handleSubmit()} >Đặt hàng</button> : <button className="payment__method-btn-disable" disabled >Đặt hàng</button> }
                </div>
    }


    
}

export default Paymentmethod;