// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";

function Navcart() {

    const [hover, setHover] = useState(false);

    useEffect(() => {
        setBill((JSON.parse(localStorage.getItem('bill'))))
    }, [hover] )

    const [bills, setBill] = useState((JSON.parse(localStorage.getItem('bill'))) ?? [])

    let sum = 0;

    if (bills !== null){
        bills.forEach(element => {
            sum += element.price * element.quantity;
        });
    }

    function delFromcart(index){
        const delItem = bills.slice(0,index).concat(bills.slice(index+1))
        localStorage.setItem('bill', JSON.stringify(delItem))
        setBill(delItem)
    }

    const handleDel = index =>{

        delFromcart(index)
    }

    const handleUpdate = (method, index, title, size, crust) =>{
        if (method === '+'){
            const bill = bills.filter( bill => (bill.title === title && bill.size === size && bill.crust === crust))
            bill[0].quantity += 1
            
            
            localStorage.setItem('bill', JSON.stringify(bills))
            setHover(!hover);
        }
        else {
            const bill = bills.filter( bill => (bill.title === title && bill.size === size && bill.crust === crust))
            bill[0].quantity -= 1

            if (bill[0].quantity <= 0){
                bill[0].quantity = 0
                handleDel(index)
                return
            }
            
            localStorage.setItem('bill', JSON.stringify(bills))
            setHover(!hover);
        }
    }


    return <div className='navbar-cart'  onMouseOver={() => {
                    setHover(!hover);
                }}
                onMouseOut={() => {
                    setHover(!hover);
                }}>
                <div className='navbar-cart__text'>
                    <i className="fa-solid fa-cart-shopping"></i> Giỏ Hàng
                </div>
    
            <div className='navbar-cart__display'>
            <div className='navbar-cart__content' >

            <ul className='navbar-cart__list'>

                {bills.length === 0 ? <div className="navbar-cart__list-empty"><i className="fa-solid fa-face-frown"></i> bạn chưa chọn món nào</div> : <>
                {bills.map((bill, index) => {
                    return <li key={index} className='navbar-cart__item'>
                    <div className='navbar-cart__item-content'>

                        <div className='navbar-cart__item-top'>{bill.title}</div>

                        <div className='navbar-cart__item-bottom'>
                            <div className='navbar-cart__item-selection'>
                                <div className='navbar-cart__item-size'>Size: {bill.size}</div>
                                <div className='navbar-cart__item-crust'>{bill.crust}</div>
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
                        <i className="fa-solid fa-circle-minus" onClick={() => handleDel(index) }></i>
                    </div>
                </li>;
                })}
                </>}

                

            </ul>
            <div className='navbar-cart__btn'> {bills.length === 0 ? <>Hãy chọn món cho hôm nay</> : <><div className="navbar-cart__btn-text">
                    Đến trang thanh toán
                </div>
                <div className="navbar-cart__btn-text">
                    {sum.toLocaleString('en-US')},000₫
                </div>
            </>}
                
            </div>
        </div>
    </div>
</div>
    ;
}

export default Navcart;