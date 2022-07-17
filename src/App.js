import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import Category from './components/Category'
import items from './data/menu'


function App() {
  const [menuItem, setMenuItem] = useState(items);
  // const [categories, setCategories] = useState([]);

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
          <h2 className='brand'>Pizza Hut</h2>
          <div className='underline'></div>
        </div>
        <Category filterItems = {filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
