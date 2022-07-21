import React, { Fragment, useState } from 'react';
import Modalproduct from './Modalproduct';

import items from '../data/menu'


const Products = ({items}) => {

  const [isActive, setActive] = useState(false)

  const handleClick = (id) => {
    // const selectItem = items.filter((item) => item.id === id)
    setActive(true)
    setID(id)
  }

  const addTocart = (id) => {
  }

  const close = () => {
    setActive(false)
  }

  const [id, setID] = useState()

  return (
  <Fragment>
  <div className='section-center'>
    {items.map((menuItem) => {
    const {id, title, img, desc, price, category} = menuItem;
        return <article key={id} className='menu-item'>
            <div style={{ 
              backgroundImage: `url('${img}')` 
            }} className='photo'>
            
            </div>
            <div className='item-info'>
                <header>
                    <h4 className='item-name'>{title}</h4>
                    <h4 className='price'>{price[0]}.000₫</h4>
                </header>
                <p className='item-text'>{desc}</p>
                <div className='item-bottom'>
                  <button className='item-btn' onClick={category === 'Pizza' ? ()=> handleClick(id) : ()=> addTocart(id)} >{category === 'Pizza' ? 'Tùy chọn' : 'Thêm vào giỏ hàng'}</button>
                </div>
                
            </div>
        </article>
    })}
  </div>
  {isActive && <Modalproduct id = {id} close = {close}  />}
  </Fragment>);
};

export default Products;