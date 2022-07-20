import React, { Fragment, useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menu from './components/Menu';
import Meber from './components/Member';
import Home from './components/Home';
import Tracking from './components/Tracking';
import items from './data/menu'
import Scrolltop from './components/Scrolltop';


function App() {
  const [menuItem, setMenuItem] = useState(items);
  // const [categories, setCategories] = useState([]);

  // const filterItems = (category) =>{
  //   if (category === 'all'){
  //     setMenuItem(items)
  //   }
  //   else{
  //     const newItems = items.filter((item) => item.category === category)
  //     setMenuItem(newItems)
  //   }
  // }

  return (
    <div className='App'>
      <Navbar />

      <Scrolltop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/tracking' element={<Tracking />} />
          <Route path='/member' element={<Meber />} />
        </Routes>
      </Scrolltop>

      <Footer />
    </div>
  );
}

export default App;
