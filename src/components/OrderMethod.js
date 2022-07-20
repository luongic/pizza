import React, { useState } from 'react';

import Delivery from './Delivery';
import Pickup from './Pickup';

function OrderMethod () {
    const [method, setMethod] = useState('pickup')
  
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
              {/* <i className={item.icon}></i>  */}
              <img src={method === item.setMethod ? item.img : item.imgDisable} className='method-top__item-img'/>
              <div className='method-top__item-text'>{item.type}</div>
            </div>
          })}
        </div>
  
        {method === 'deli' ? <Delivery /> : <Pickup />} 
      </div>
    </div>
  }

export default OrderMethod