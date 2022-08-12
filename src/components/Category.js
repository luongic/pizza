import React, {useState} from 'react';

const Categories = ({filterItems}) => {

  const categoriesList = [
    {
      type: 'all',
      name: 'Tất cả',
    },
    {
      type: 'Promotion',
      name: 'Khuyến mãi',
    },
    {
      type: 'Pizza',
      name: 'Pizza',
    },
    {
      type: 'Noodle',
      name: 'Mì Ý và Cơm',
    },
    {
      type: 'Snack',
      name: 'Khai Vị',
    },
    {
      type: 'Drink',
      name: 'Nước uống',
    },
  ]

  const [active, setActive] = useState(0)

  const handleClick = (index,payload) =>{
    setActive(index)
    filterItems(payload)
  }

  return <div className='btn-container'>

    {categoriesList.map((cate, index) =>{
      const {type, name} = cate;
      return <button key={index} className={index === active ? 'filter-btn active' : 'filter-btn'} onClick={() => handleClick(index,type)} >{name}</button>
    })}
  </div>;
  
};

export default Categories;