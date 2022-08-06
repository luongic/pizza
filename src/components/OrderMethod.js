import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import Delivery from './Delivery';
import Pickup from './Pickup';

function OrderMethod ({close}) {
  const context = useContext(CartContext)

  const [method, setMethod] = useState('pickup')

  useEffect(() => {
    setMethod(context.method)
  }
  ,[context.method])
  
  
    const methods = [
      {
        type: 'Giao hàng tận nơi',
        icon: 'fa-solid fa-motorcycle',
        setMethod: 'deli',
        _class: 'method-top__item',
        imgDisable: '/img/deli.png',
        img: '/img/deli_active.gif'
      },
      {
        type: 'Mua mang về',
        icon: 'fa-solid fa-hand-fist',
        setMethod: 'pickup',
        _class: 'method-top__item',
        imgDisable: '/img/pickup.png',
        img: '/img/pickup_active.gif'
      },
    ]
  
    return <div className='contain-fluid'>
      <div className='method'>
        <div className='method-top'>
  
          {methods.map((item, index) => {
            return <div className={method === item.setMethod ? 'method-top__item active' : 'method-top__item'} onClick={() => setMethod(item.setMethod)} key={index} >
              <img src={method === item.setMethod ? item.img : item.imgDisable} className='method-top__item-img' alt='pizzahut'/>
              <div className='method-top__item-text'>{item.type}</div>
            </div>
          })}
        </div>
  
        {method === 'deli' ? <Delivery close={close} /> : <Pickup close={close} />} 
      </div>
    </div>
  }

export default OrderMethod