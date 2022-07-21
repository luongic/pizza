import React, { Fragment, useState } from 'react';
import Modalproduct from './Modalproduct';

const Products = ({items}) => {

  const [isActive, setActive] = useState(false)

  const handleClick = (id) => {
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
                  {category === 'Pizza' ? <button className='item-btn' onClick={()=> handleClick(id)} >Tùy chọn</button> : <button className='item-btn' onClick={()=> addTocart(id)} >Thêm vào giỏ hàng</button>}

                </div>
                
            </div>
        </article>
    })}
  </div>
  {isActive && <Modalproduct id = {id} close = {close} />}
  </Fragment>);
};

export default Products;