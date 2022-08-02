import React from 'react';
import { useParams } from "react-router-dom";


function Tracking() {
  const params = useParams()

  console.log(Object.keys(params).length === 0);

  return <div className='tracking'>

  </div>
}

export default Tracking;