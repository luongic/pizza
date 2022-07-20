import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import items from '../data/promotions'
import stores from '../data/stores';

function Slider() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0){
      setIndex(lastIndex)
    } 
    if (index > lastIndex){
      setIndex(0)
    } 
  },[index])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 4200)
    return () => clearInterval(slider )
  }, [index])


  return <div className="slider">

    <div className='left-btn' onClick={() => setIndex(index - 1)}>
      <i className="fa-solid fa-angle-left"></i>
    </div>

    {items.map((item, personIndex) => {
      let positon = 'nextSlide'
      if (personIndex === index){
        positon = 'activeSlide'
      }
      if (personIndex === index - 1 || (index === 0 && personIndex === items.length - 1)){
        positon = 'lastSlide'
      }
      const classes = `slide-item ${positon}`
      return <div className={classes} key={item.id}>
        <img src={item.img} alt={item.title} className="slide-photo" />
        <button className='slide-btn'>
          <Link to='/menu' >Mua ngay</Link>
        </button>
      </div>
    })}

    <div className='right-btn'onClick={() => setIndex(index + 1)} >
      <i className="fa-solid fa-angle-right"></i>
    </div>


  </div>;
}

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
  
  const disChange = () =>{
    setDist(document.querySelector('#district').value)
  }

  const selectDis = stores.filter((store) => (store.district === dist && store.city === city))
  const subdis = [...new Set(selectDis.map((dist) => dist.subdis))]

  const subChange = () =>{
    setSubdist(document.querySelector('#subdis').value)
  }

  const selectSub = stores.filter((store) => (store.subdis === subdistricts && store.district === dist))
  const storelist = [...new Set(selectSub.map((dist) => dist.name))]

  return <div className='method-content'>
    <div className='method-content__city'>
      <div className='method-label' >Thành phố: </div>
      <select className='selection__add' id='city' onChange={() => cityChange()}>
        <option value="0">...</option>

        {cities.map((city, index) => {
          return <option value={city} key={index} >{city}</option>
        })}
      </select>

    </div>

    <div className='method-content__district'>
      <div className='method-label'>Quận, Huyện: </div>
      <select className='selection__add' id='district' onChange={() => disChange()}>
        <option value="0">...</option>
        
        {districts.map((district, index) => {
          return <option value={district} key={index} >{district}</option>
        })}
      </select>
    </div>

    <div className='method-content__subdistrict'>
      <div className='method-label'>Phường: </div>
      <select className='selection__add' id='subdis' onChange={() => subChange()}>
        <option value="0">...</option>
        
        {subdis.map((sub, index) => {
          return <option value={sub} key={index} >{sub}</option>
        })}
      </select>
    </div>

    <div className='method-content__subdistrict'>
      <div className='method-label'>Chọn cửa hàng: </div>
      <select className='selection__add' name="cars" id="cars">
        <option value="0">...</option>
        
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

function Delivery() {

  const [city, setCity] = useState()
  const [dist, setDist] = useState()
  const [subdistricts, setSubdist] = useState()

  const cities = [...new Set(stores.map((store) => store.city))]

  const cityChange = () =>{
    setCity(document.querySelector('#city').value)
  }

  const selectCity = stores.filter((store) => store.city === city)
  const districts = [...new Set(selectCity.map((selcet) => selcet.district))]
  
  const disChange = () =>{
    setDist(document.querySelector('#district').value)
  }

  const selectDis = stores.filter((store) => (store.district === dist && store.city === city))
  const subdis = [...new Set(selectDis.map((dist) => dist.subdis))]

  const subChange = () =>{
    setSubdist(document.querySelector('#subdis').value)
  }

  const selectSub = stores.filter((store) => (store.subdis === subdistricts && store.district === dist))
  const storelist = [...new Set(selectSub.map((dist) => dist.name))]

  return <div className='method-content'>
    <div className='method-content__city'>
      <div className='method-label' >Thành phố: </div>
      <select className='selection__add' id='city' onChange={() => cityChange()}>
        <option value="0">...</option>

        {cities.map((city, index) => {
          return <option value={city} key={index} >{city}</option>
        })}
      </select>

    </div>

    <div className='method-content__district'>
      <div className='method-label'>Quận, Huyện: </div>
      <select className='selection__add' id='district' onChange={() => disChange()}>
        <option value="0">...</option>
        
        {districts.map((district, index) => {
          return <option value={district} key={index} >{district}</option>
        })}
      </select>
    </div>

    <div className='method-content__subdistrict'>
      <div className='method-label'>Phường: </div>
      <select className='selection__add' id='subdis' onChange={() => subChange()}>
        <option value="0">...</option>
        
        {subdis.map((sub, index) => {
          return <option value={sub} key={index} >{sub}</option>
        })}
      </select>
    </div>

    <div className='method-content__address' >
      <input type="text" className='method-content__address-number' placeholder='Số nhà và tên đường. VD: 32 Nguyễn Thị Thâp' />
    </div>

    <div className='method-btn' >
      <Link to='/menu' >Bắt đầu đặt hàng</Link>
    </div>

  </div>;
}


function OrderMethod () {
  const [method, setMethod] = useState('deli')

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

function Recommend() {
  return <div className='contain'>

  </div>
}


function Home() {
  return <div className='home'>
    <Slider />
    <OrderMethod />
  </div>;
}

export default Home;


