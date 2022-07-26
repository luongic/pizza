import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import stores from '../data/stores';

function Delivery() {

    const [city, setCity] = useState()
  
    const cities = [...new Set(stores.map((store) => store.city))]
  
    const cityChange = () =>{
      setCity(document.querySelector('#city').value)
      setCitySelected(true)
    }

    const disChange = () =>{
      setDisSelected(true)
    }
  
    const selectCity = stores.filter((store) => store.city === city)
    const districts = [...new Set(selectCity.map((selcet) => selcet.district))]

    // History
    const [old, setOld] = useState('old')

    const [citySelected, setCitySelected] = useState(false)
    const [disSelected, setDisSelected] = useState(false)


    const handleOldclick = () => {
      
    }

    const handleNewclick = () => {
      setOld('new')
      
      setChoose(false)
    }

    const [choose, setChoose] = useState(false)

    const handleMethod = () => {
      const getcity = document.querySelector('#city').value
      const getdistrict = document.querySelector('#district').value
      const getsubdis = document.querySelector('#subdis').value
      const getstore = document.querySelector('#store').value
      console.log(getstore, getsubdis, getdistrict, getcity);
    }

    const inputChange = () => {
      if (citySelected && disSelected && document.querySelector('.method-content__address-number').value !== ''){
        setChoose(true)
      }
    }
  
    return <>
          {old === 'new' ? <></> : <>
            <div className='method-content__history'>
              <div className='method-content__history-heading'>
                Địa chỉ lần trước bạn chọn là: 
              </div>

              <div className='method-content__history-address'>
                <div className='method-content__history-name'>
                  Pizza Hut Skygarden
                </div>
                <div className='method-content__history-full-address'>
                  1024 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP HCM
                </div>
              </div>

              <div className='method-content__history-btn-contain'>
                <div className='method-content__history-btn-old' onClick={() => handleOldclick()} >
                  <Link to='/menu' >Sử dụng địa chỉ này</Link>
                </div>

                <div className='method-content__history-btn-new' onClick={() => handleNewclick()} >
                  Chọn một địa chỉ khác
                </div>
              </div>
            </div>
          </> }
          

          {old === 'new' ? <>
          <div className='method-content'>
            <div className='method-content__city'>
              <div className='method-label' >Thành phố: </div>
              <select className='selection__add' id='city' onClick={() => cityChange()}>
                <option value="0"></option>
        
                {cities.map((city, index) => {
                  return <option value={city} key={index} >{city}</option>
                })}
              </select>
        
            </div>
        
            <div className='method-content__district'>
              <div className='method-label'>Quận, Huyện: </div>
              <select className='selection__add' id='district' onClick={() => disChange()} >
                <option value="0"></option>
                
                {districts.map((district, index) => {
                  return <option value={district} key={index} >{district}</option>
                })}
              </select>
            </div>
  
      {/* <div className='method-content__subdistrict'>
        <div className='method-label'>Phường: </div>
        <input type="text" className='method-content__address-number' placeholder='Nhập Tên Phường' onChange={() => setChoose(true)}/>
      </div> */}
  
            <div className='method-content__subdistrict' >
              <div className='method-label'>Địa chỉ cụ thể: </div>
              <input type="text" className='method-content__address-number' placeholder='Ví dụ: 19 Nguyễn Hữu Thọ, P. Tân Phong' onBlur={() => inputChange()}/>
            </div>

            { choose === true ? <div className='method-btn' onClick={() => handleMethod()} >
              <Link to='/menu' >Bắt đầu đặt hàng</Link>
            </div> : <button className='method-btn-disable' disabled >
              Bạn chưa chọn địa chỉ
            </button> }        
          </div>
          </> : 
          <></> }

    </>;
  }

export default Delivery