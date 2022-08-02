import React from 'react';
import { useParams } from "react-router-dom";


function Tracking() {
  const params = useParams()

  console.log(Object.keys(params).length === 0);

  return  <div className='tracking'>
            <div className='tracking__heading'>Kiểm tra đơn hàng</div>
            <div className='tracking__contain'>
            
              <div className='tracking__contain-check'>

                <div className='tracking__contain-input'>
                  <div className='tracking__contain-input-label'>Nhập mã đơn hàng: </div>
                  <input type='text' />
                </div>
                <div className='tracking__contain-btn'>
                  Kiểm tra
                </div>
              </div>
              <div className='tracking__contain-display'></div>
            </div>
          </div>
}

export default Tracking;