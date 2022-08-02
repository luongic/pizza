import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import toast from '../functions/toast';

import getOrderByID from '../functions/getOrderByID';


function Tracking() {
  const params = useParams()
  const id = Number(params.id)
  const navigate = useNavigate()
  const [orderID, setOrderID] = useState(id)
  const [haveID, setHaveID] = useState(false)

  console.log(haveID);

  // console.log(Object.keys(params).length === 0);

  console.log(orderID);

  let order = getOrderByID(orderID)

  console.log(order);
  
  useEffect(() => {
    if (order === undefined || isNaN(id)){
      if (id === 0){
        return
      }
      else {
        setOrderID(0)
        console.log('false');
        setHaveID(false)
        toast({
          title: "Mã không chính xác",
          message: `Mã đơn hàng ${params.id} không hợp lệ`,
          type: "warning",
          duration: 3000
        })
      }
    }
    else{
      console.log('true');
      setOrderID(id)
      setHaveID(true)
    }
  }
  ,[id, order, params.id])


  const handleCheck = () => {
    const inputID = Number(document.querySelector('#inputorderID').value)
    setOrderID(inputID)
    navigate(`/tracking/${inputID}`)

  }

  return  <div className='tracking'>
            <div className='tracking__heading'>Kiểm tra đơn hàng</div>
            <div className='tracking__contain'>
            
              <div className='tracking__contain-check'>

                <div className='tracking__contain-input'>
                  <div className='tracking__contain-input-label'>Nhập mã đơn hàng: </div>
                  <input type='text' id='inputorderID' defaultValue={orderID.toString()} />
                </div>
                <div className='tracking__contain-btn' onClick={() => handleCheck()} >
                  Kiểm tra
                </div>
              </div>

              { !(order === undefined || isNaN(id)) ? <div className='tracking__contain-display'>
                Trạng thái hiện tại: {(order.state)}
              </div> : <></> }

            </div>
          </div>
}

export default Tracking;