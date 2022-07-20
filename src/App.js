import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menu from './components/Menu';
import Meber from './components/Member';
import Home from './components/Home';
import Tracking from './components/Tracking';
import Scrolltop from './components/Scrolltop';


function App() {
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
