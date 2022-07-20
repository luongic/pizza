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
        _class: 'method-top__item'
      },
      {
        type: 'Đến lấy',
        icon: 'fa-solid fa-hand-fist',
        setMethod: 'pickup',
        _class: 'method-top__item'
      },
    ]
  
    return <div className='contain-fluid'>
      <div className='method'>
        <div className='method-top'>
  
          {methods.map((item, index) => {
            return <div className={method === item.setMethod ? 'method-top__item active' : 'method-top__item'} onClick={() => setMethod(item.setMethod)} key={index} >
              <i className={item.icon}></i> {item.type}
            </div>
          })}
        </div>
  
        {method === 'deli' ? <Delivery /> : <Pickup />} 
      </div>
    </div>
  }

export default OrderMethod