import React from 'react';
// import menu from './data/menu';

const Menu = ({items}) => {

  return <div className='section-center'>
    {items.map((menuItem) => {
    const {id, title, img, desc, price} = menuItem;
        return <article key={id} className='menu-item'>
            {/* <img src={img} alt={title} className='photo' /> */}
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
            </div>
        </article>
    })}
  </div>;
};

export default Menu;