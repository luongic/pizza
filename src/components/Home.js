import React from 'react';


import Slider from './Slider';
import OrderMethod from './OrderMethod';


// function Recommend() {
//   return <div className='contain'>

//   </div>
// }

function Home() {
  return <div className='home'>
    <Slider />
    <OrderMethod />
    <div id="toast"></div>
  </div>;
}

export default Home;


