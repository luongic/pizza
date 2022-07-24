import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import stores from '../data/stores';

function Pickup() {

    const [city, setCity] = useState()
    const [dist, setDist] = useState()
    const [subdistricts, setSubdist] = useState()
  
    const cities = [...new Set(stores.map((store) => store.city))]
  
    const cityChange = () =>{
      setCity(document.querySelector('#city').value)
    }
  
    const selectCity = stores.filter((store) => store.city === city)
    const districts = [...new Set(selectCity.map((selcet) => selcet.district))]
    
    useEffect(() =>{
      setDist(document.querySelector('#district').value)
    },[city])

    const disChange = () =>{
      setDist(document.querySelector('#district').value)
    }
  
    const selectDis = stores.filter((store) => (store.district === dist))
    const subdis = [...new Set(selectDis.map((dist) => dist.subdis))]

    useEffect(() =>{
      setSubdist(document.querySelector('#subdis').value)
    },[dist])
  
    const subChange = () =>{
      setSubdist(document.querySelector('#subdis').value)
    }
  
    const selectSub = stores.filter((store) => (store.subdis === subdistricts && store.district === dist))
    const storelist = [...new Set(selectSub.map((dist) => dist.name))]
  
    return <div className='method-content'>
      <div className='method-content__city'>
        <div className='method-label' >Thành phố: </div>
        <select className='selection__add' id='city' onClick={() => cityChange()}>
  
          {cities.map((city, index) => {
            return <option value={city} key={index} >{city}</option>
          })}
        </select>
  
      </div>
  
      <div className='method-content__district'>
        <div className='method-label'>Quận, Huyện: </div>
        <select className='selection__add' id='district' onClick={() => disChange()}>
          
          {districts.map((district, index) => {
            return <option value={district} key={index} >{district}</option>
          })}
        </select>
      </div>
  
      <div className='method-content__subdistrict'>
        <div className='method-label'>Phường: </div>
        <select className='selection__add' id='subdis' onClick={() => subChange()}>
          
          {subdis.map((sub, index) => {
            return <option value={sub} key={index} >{sub}</option>
          })}
        </select>
      </div>
  
      <div className='method-content__subdistrict'>
        <div className='method-label'>Chọn cửa hàng: </div>
        <select className='selection__add' name="cars" id="cars">
          
          {storelist.map((sub, index) => {
            return <option value={sub} key={index} >{sub}</option>
          })}
        </select>
      </div>
  
      <div className='method-btn' >
        <Link to='/menu' >Bắt đầu đặt hàng</Link>
      </div>
  
    </div>;
  }

export default Pickup