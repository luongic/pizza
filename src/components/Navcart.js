import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import Confirmdel from "./Confirmdel";

function Navcart() {
    const context = useContext(CartContext)
    const [click, setClick] = useState(true)
    const [bills, setBill] = useState((JSON.parse(localStorage.getItem('bill'))) ?? [])

    useEffect(() => {
        setBill((JSON.parse(localStorage.getItem('bill'))))
    }, [context.lengthCart] )
    
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
                handleDel(index)
                return
            }
            setClick(!click)
            localStorage.setItem('bill', JSON.stringify(bills))
            context.setLengthCart(context.lengthCart -= 1)
        }
    }

    return  <><div className='navbar-cart__text'>
                    <i className="fa-solid fa-cart-shopping">
                        <div className="navbar-cart__number-count">{context.lengthCart}</div>
                    </i> Giỏ Hàng 
                </div>
    
                <div className='navbar-cart__display'>
                    <div className='navbar-cart__content' >
                        <ul className='navbar-cart__list'>
                            { (bills === null || bills.length === 0) ? <div className="navbar-cart__list-empty">
                                <i className="fa-solid fa-face-frown"></i> bạn chưa chọn món nào</div> : 
                                <>
                                    {bills.map((bill, index) => {
                                        return <li key={index} className='navbar-cart__item'>
                                        <div className='navbar-cart__item-content'>

                                            <div className='navbar-cart__item-top'>{bill.title}</div>

                                            <div className='navbar-cart__item-bottom'>
                                                <div className='navbar-cart__item-selection'>
                                                    {bill.size !== '' ? <><div className='navbar-cart__item-size'>Size: {bill.size}</div>
                                                    <div className='navbar-cart__item-crust'>{bill.crust}</div></> : <></> }
                                                </div>
                                                <div className='navbar-cart__item-quantity'>
                                                    <button className="navbar-cart__item-quantity-minus" disabled={bill.quantity === 1} 
                                                    onClick={ () => handleUpdate('-', index, bill.title, bill.size, bill.crust, bill.quantity)} >-</button>
                                                    <span>x {bill.quantity}</span> 
                                                    <button className="navbar-cart__item-quantity-plus" onClick={ () => handleUpdate('+', index, bill.title, bill.size, bill.crust, bill.quantity)} >+</button>
                                                </div>
                                                <div className='navbar-cart__item-price'>  <span>{(bill.quantity * bill.price).toLocaleString('en-US')},000 ₫</span> </div>
                                            </div>

                                        </div>
                                        <div className='navbar-cart__item-del'>
                                            <i className="fa-solid fa-circle-minus" onClick={() => handleDel(index, bill.quantity) }></i>
                                        </div>
                                    </li>;
                                    })}
                                </>
                            }
                        </ul>
                        <> 
                                { (bills === null || bills.length === 0) ? <Link to='/menu' className='navbar-cart__btn' >
                                <div className="navbar-cart__btn-text"> Hãy chọn món ngay </div>
                                </Link> : 
                                <Link to='/payment' className='navbar-cart__btn' >
                                <div className="navbar-cart__btn-text"> Đến trang thanh toán </div>
                                    <div className="navbar-cart__btn-text">
                                        {sum.toLocaleString('en-US')},000₫
                                    </div>
                                </Link>}
                
                        </>
                    </div>
                </div>
                {isActive && <Confirmdel index = {index} quantity={quantity} close = {close} />}
                </>;
}

export default Navcart;