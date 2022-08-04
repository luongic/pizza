import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import toast from '../functions/toast';

import Trackingstate from './Trackingstate';
import getOrderByID from '../functions/getOrderByID';


function Tracking() {
  const params = useParams()
  const id = Number(params.id)
  const navigate = useNavigate()
  const [orderID, setOrderID] = useState(id) 
  
  let order = getOrderByID(orderID)

  
  useEffect(() => {
    
    if (order === undefined || isNaN(id)){
      if (id === 0){
        return
      }
      else {
        setOrderID(0)
        toast({
          title: "Mã không chính xác",
          message: `Mã đơn hàng ${params.id} không hợp lệ`,
          type: "warning",
          duration: 3000
        })
      }
    }
    else{
      const id = Number(params.id)
      setOrderID(id)
    }
  }
  ,[id, order, params.id])


  


  const orderFind = (JSON.parse(localStorage.getItem('orders')) ?? [])

  if (orderFind.length === 0 ){
    const handleCheck = () => {
      toast({
        title: "Chưa có đơn hàng nào được tạo",
        message: `Tạo mới và hoàn tất một đơn hàng để kiểm tra`,
        type: "warning",
        duration: 6000
      })
  
    }
    return <div className='tracking'>
              <div className='tracking__heading'>Kiểm tra đơn hàng</div>
              <div className='tracking__contain'>
              
                <div className='tracking__contain-check'>

                  <div className='tracking__contain-input'>
                    <div className='tracking__contain-input-label'>Nhập mã đơn hàng: </div>
                    <input type='text' id='inputorderID' />
                  </div>
                  <div className='tracking__contain-btn' onClick={() => handleCheck()} >
                    Kiểm tra
                  </div>
                </div>

                <div className='tracking__contain-display'>
                  Trạng thái hiện tại: CHƯA CÓ ĐƠN HÀNG NÀO ĐƯỢC TẠO
                </div>

              </div>
            </div>
  }
  else {

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

                { !(order === undefined || isNaN(id)) ? <Trackingstate state = {(order.state)} /> : <></> }

              </div>
            </div>
  }
}

export default Tracking;