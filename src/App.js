import React, {useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menu from './components/Menu';
import Meber from './components/Member';
import Home from './components/Home';
import Tracking from './components/Tracking';
import Scrolltop from './components/Scrolltop';
import Overlay from './components/Overlay';
import Payment from './components/Payment';
import Receipt from './components/Receipt'
import Paying from './components/Paying';
import Modalpromotion from './components/Modalpromotion';


function App() {
  const [isActive, setActive] = useState(true)

  const close = () =>{
    setActive(false)
  }

  const location = useLocation()
  const getpath = location.pathname

  return (
    <div className='App'>
      <Navbar />

      {(isActive && getpath === '/'  ) && <Overlay  > <Modalpromotion close={close}></Modalpromotion> </Overlay> }

      <Scrolltop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/tracking' element={<Tracking />} />
          <Route path='/member' element={<Meber />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/receipt/:id' element={<Receipt />} />
          <Route path='/paying/:method/:id' element={<Paying />} />
        </Routes>
      </Scrolltop>

      <Footer />
      <div id="toast"></div>
    </div>
  );
}

export default App;
