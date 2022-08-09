import React, { useState } from 'react';

import Overlay from './Overlay';
import Modalpromotion from './Modalpromotion';

import Slider from './Slider';
import OrderMethod from './OrderMethod';
import { useLocation } from 'react-router-dom';

function Home() {
  const [isActive, setActive] = useState(true)

  const close = () =>{
    setActive(false)
  }


  const location = useLocation()
  const getpath = location.pathname
  return <div className='home'>
    {(isActive && getpath === '/'  ) && <Overlay  > <Modalpromotion close={close}></Modalpromotion> </Overlay> }
    
    <Slider />
    <OrderMethod />
  </div>;
}

export default Home;


