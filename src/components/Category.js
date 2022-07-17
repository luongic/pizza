import React from 'react';

const Categories = ({filterItems}) => {
  return <div className='btn-container'>
    <button className='filter-btn' onClick={() => filterItems('all')} >Tất cả</button>
    <button className='filter-btn' onClick={() => filterItems('Pizza')} >Pizza</button>
    <button className='filter-btn' onClick={() => filterItems('Noodle')} >Mì Ý và Cơm</button>
    <button className='filter-btn' onClick={() => filterItems('Snack')} >Khai Vị</button>
    <button className='filter-btn' onClick={() => filterItems('Drink')} >Nước uống</button>
  </div>;
};

export default Categories;