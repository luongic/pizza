import React, { Fragment, useState } from 'react';
import Products from './Products'
import Category from './Category'
import items from '../data/menu'


const Menu = () => {

  const [menuItem, setMenuItem] = useState(items);

  const filterItems = (category) =>{
      if (category === 'all'){
      setMenuItem(items)
      }
      else{
      const newItems = items.filter((item) => item.category === category)
      setMenuItem(newItems)
      }
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2 className='brand'>Menu</h2>
          <div className='underline'></div>
        </div>

        <Category filterItems = {filterItems} />
        <Products items={menuItem} />

      </section>
    </main>
  );
};

export default Menu;