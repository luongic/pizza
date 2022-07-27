import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import stores from '../data/stores';
import saveAddress from '../functions/saveAddress';

function Pickup({close}) {

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
      if (document.querySelector('#district')){
        setDist(document.querySelector('#district').value)
      }
    },[city])

    const disChange = () =>{
      setDist(document.querySelector('#district').value)
    }
  
    const selectDis = stores.filter((store) => (store.district === dist))
    const subdis = [...new Set(selectDis.map((dist) => dist.subdis))]

    useEffect(() =>{
      if (document.querySelector('#subdis')){
        setSubdist(document.querySelector('#subdis').value)
      }
    },[dist])
  
    const subChange = () =>{
      setSubdist(document.querySelector('#subdis').value)
    }
  
    const selectSub = stores.filter((store) => (store.subdis === subdistricts && store.district === dist))
    const storelist = [...new Set(selectSub.map((dist) => dist.name))]

    // check path
    const location = useLocation()
    const getpath = location.pathname

    // History

    const [old, setOld] = useState('old')


    const handleOldclick = () => {
      localStorage.setItem('method', 'pickup')
      if (getpath === '/payment'){
        close()
      }
      
    }

    const handleNewclick = () => {
      setOld('new')
      
      setChoose(false)
    }

    const [choose, setChoose] = useState(false)


    const handleMethodNew = () => {
      const getcity = document.querySelector('#city').value
      const getdistrict = document.querySelector('#district').value
      const getsubdis = document.querySelector('#subdis').value
      const getstore = document.querySelector('#store').value

      if (getpath === '/payment'){
        window.location.reload()
      }

      saveAddress('pickup', getcity, getdistrict, getsubdis, getstore, '')
      localStorage.setItem('method', 'pickup')
    }

    const handleMethod = () => {
      const getcity = document.querySelector('#city').value
      const getdistrict = document.querySelector('#district').value
      const getsubdis = document.querySelector('#subdis').value
      const getstore = document.querySelector('#store').value

      if (getpath === '/payment'){
        close()
      }

      saveAddress('pickup', getcity, getdistrict, getsubdis, getstore, '')
      localStorage.setItem('method', 'pickup')
    }

    const oldAddress = ((JSON.parse(localStorage.getItem('pickup'))) ?? [])

    if (oldAddress.length === 0){
      return <div className='method-content'>
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
        <select className='selection__add' id='district' onClick={() => disChange()}>
          <option value="0"></option>
          
          {districts.map((district, index) => {
            return <option value={district} key={index} >{district}</option>
          })}
        </select>
      </div>
  
      <div className='method-content__subdistrict'>
        <div className='method-label'>Phường: </div>
        <select className='selection__add' id='subdis' onClick={() => subChange()}>
          <option value="0"></option>
          
          {subdis.map((sub, index) => {
            return <option value={sub} key={index} >{sub}</option>
          })}
        </select>
      </div>
  
      <div className='method-content__subdistrict'>
        <div className='method-label'>Chọn cửa hàng: </div>
        <select className='selection__add' id="store" onChange={() => setChoose(true)}>
          <option value="0"></option>
          {storelist.map((sub, index) => {
            return <option value={sub} key={index} >{sub}</option>
          })}
        </select>
      </div>

      { choose === true ? <div className='method-btn' onClick={() => handleMethod()} >
          {getpath === '/' || getpath === undefined ? <Link to='/menu'  >Bắt đầu đặt hàng</Link> : 
          <div className='method-btn-modal' onClick={() => handleMethodNew()} >Bắt đầu đặt hàng</div>}
          
      </div> : 
      <button className='method-btn-disable' disabled >
        Bạn chưa chọn cửa hàng
      </button> }

    </div>
    }
    else{
      const store = stores.filter((store) => (store.name === oldAddress.store ))
      return <>
          {old === 'new' ? <>

          </> : <>
            <div className='method-content__history'>
              <div className='method-content__history-heading'>
                Cửa hàng lần trước bạn chọn là: 
              </div>

              <div className='method-content__history-address'>
                <div className='method-content__history-name'>
                  {store[0].name}
                </div>
                <div className='method-content__history-full-address'>
                  {store[0].address}, {store[0].subdis}, {store[0].district}, {store[0].city}
                </div>
              </div>

              <div className='method-content__history-btn-contain'>
                {/* <div className='method-content__history-btn-old' onClick={() => handleOldclick()} >
                  <Link to='/menu' >Chọn cửa hàng này</Link>
                </div> */}
                {getpath === '/' ? 
                <div className='method-content__history-btn-old' onClick={() => handleOldclick()} >
                  <Link to='/menu' >Chọn cửa hàng này</Link>
                </div> : 
                <div className='method-content__history-btn-old' onClick={() => handleOldclick()} >
                 <div className='method-btn-modal'>Chọn cửa hàng này</div>
                </div>}

                <div className='method-content__history-btn-new' onClick={() => handleNewclick()} >
                  Chọn cửa hàng khác
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
              <select className='selection__add' id='district' onClick={() => disChange()}>
                <option value="0"></option>
                
                {districts.map((district, index) => {
                  return <option value={district} key={index} >{district}</option>
                })}
              </select>
            </div>
        
            <div className='method-content__subdistrict'>
              <div className='method-label'>Phường: </div>
              <select className='selection__add' id='subdis' onClick={() => subChange()}>
                <option value="0"></option>
                
                {subdis.map((sub, index) => {
                  return <option value={sub} key={index} >{sub}</option>
                })}
              </select>
            </div>
        
            <div className='method-content__subdistrict'>
              <div className='method-label'>Chọn cửa hàng: </div>
              <select className='selection__add' id="store" onChange={() => setChoose(true)}>
                <option value="0"></option>
                {storelist.map((sub, index) => {
                  return <option value={sub} key={index} >{sub}</option>
                })}
              </select>
            </div>

            { choose === true ? <div className='method-btn' onClick={() => handleMethod()} >
              {getpath === '/' || getpath === undefined ? <Link onClick={() => handleMethod()}  to='/menu'  >Bắt đầu đặt hàng</Link> : 
                  <div className='method-btn-modal' onClick={() => handleMethod()} >Bắt đầu đặt hàng</div>}
            </div> : <button className='method-btn-disable' disabled >
              Bạn chưa chọn cửa hàng
            </button> }
        
            
        
          </div>
          </> : <></> }

          
    </>;
    }
    
  
    
  }

export default Pickup