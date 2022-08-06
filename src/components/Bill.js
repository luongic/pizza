import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Confirmdel from "./Confirmdel";

function Bill() {

    const context = useContext(CartContext)

    const [click, setClick] = useState(true)
    const [bills, setBill] = useState((JSON.parse(localStorage.getItem('bill'))) ?? [])

    const getmethod = (((localStorage.getItem('method'))) ?? [])
    
    const [isActive, setActive] = useState(false)
    const [index, setIndex] = useState()

    const close = () => {
        setActive(false)
    }

    let sum = 0;

    if (bills !== null){
        bills.forEach(element => {
            sum += element.price * element.quantity;
        });
        
    }

    

    useEffect(() => {
        setBill((JSON.parse(localStorage.getItem('bill'))))

        // context.setMethod(((localStorage.getItem('method'))) ?? [])

        const voucher = document.querySelector('#voucher').value
        
        if (voucher === 'Pizzahut10'){
            const percent = 10
            const discount = (sum*percent/100)
            const total = sum - discount + context.delifee
            context.setTotal(total)
            context.setVoucher(discount)
            return
        }
        const discount = 0
        context.setVoucher(discount)
        const total = sum - discount + context.delifee
        context.setTotal(total)

    }, [context.lengthCart, sum, context] )

    const [quantity, setQuantity] = useState(0)
    const handleDel = (index, quantity) =>{
        setQuantity(quantity)
        setIndex(index)
        setActive(true)
    }

    const handleUpdate = (method, index, title, size, crust) =>{
        if (method === '+'){
            const bill = bills.filter( bill => (bill.title === title && bill.size === size && bill.crust === crust))
            bill[0].quantity += 1
            setClick(!click)
            localStorage.setItem('bill', JSON.stringify(bills))
            context.setLengthCart(context.lengthCart += 1)
        }
        else {
            const bill = bills.filter( bill => (bill.title === title && bill.size === size && bill.crust === crust))
            bill[0].quantity -= 1

            if (bill[0].quantity <= 0){
                bill[0].quantity = 0
                return
            }
            setClick(!click)
            localStorage.setItem('bill', JSON.stringify(bills))
            context.setLengthCart(context.lengthCart -= 1)
        }
    }
    return <>
            <div className="payment-bill" >
                <div className="payment-text" >Đơn hàng của bạn</div>
                <div className='cart__display'>
                    <div className='cart__content' >
                        <ul className='cart__list'>

                            {bills.length === 0 ? <div className="cart__list-empty">
                                <i className="fa-solid fa-face-frown"></i> bạn chưa chọn món nào</div> : 
                                <div>
                                    {bills.map((bill, index) => {
                                        return <li key={index} className='cart__item'>
                                        <div className='cart__item-content'>

                                            <div className='cart__item-top'>{bill.title}</div>

                                            <div className='cart__item-bottom'>
                                                <div className='cart__item-selection'>
                                                    {bill.size !== '' ? <><div className='cart__item-size'>Size: {bill.size}</div>
                                                    <div className='cart__item-crust'>{bill.crust}</div></> : <></> }
                                                </div>
                                                <div className='cart__item-quantity'>
                                                    <button className="cart__item-quantity-minus" disabled={bill.quantity === 1} 
                                                    onClick={ () => handleUpdate('-', index, bill.title, bill.size, bill.crust, bill.quantity)} >-</button>
                                                    <span>x {bill.quantity}</span> 
                                                    <button className="cart__item-quantity-plus" onClick={ () => handleUpdate('+', index, bill.title, bill.size, bill.crust, bill.quantity)} >+</button>
                                                </div>
                                                <div className='cart__item-price'>  <span>{((bill.quantity * bill.price)*1000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span> </div>
                                            </div>

                                        </div>
                                        <div className='cart__item-del'>
                                            <i className="fa-solid fa-circle-minus" onClick={() => handleDel(index, bill.quantity) }></i>
                                        </div>
                                    </li>;
                                    })}

                                    <div className="cart__total">
                                        <div className="cart__total-text">Tổng đơn hàng:</div>
                                        <div className="cart__total-number">{(sum*1000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                                    </div>

                                    <div className="cart__total">
                                        <div className="cart__total-text">Giảm giá Voucher/Coupon:</div>
                                        <div className="cart__total-number">- {((context.voucher)*1000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                                    </div>

                                    <div className="cart__total">
                                        <div className="cart__total-text"></div>
                                        <div className="cart__total-number"></div>
                                    </div>

                                    <div className="cart__total">
                                            <div className="cart__total-text">Phí giao hàng:</div>
                                            {getmethod === 'deli' ? <div className="cart__total-number">{context.delifee}.000 VND</div> :
                                             <div className="cart__total-number">0 VND</div>}
                                        </div>
                                        <div className="cart__total">
                                            <div className="cart__total-text">Tổng cộng:</div>
                                            <div className="cart__total-number" id="total">{(context.total*1000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                                        </div>
                                    
                                </div>
                            }
                            
                        </ul>
                    </div>

                    
                </div>

                <div className='payment-bill__contain-note' >
                    <div className='method-label'>Thêm ghi chú cho đơn hàng: </div>
                    <input type="text" id='billnote' className='method-content__address-number' placeholder='Ví dụ: Không cay...'/>
                </div>
                
            </div>
            {isActive && <Confirmdel index = {index} quantity={quantity} close = {close} />}
            </> ;
}

export default Bill;