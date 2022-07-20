import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import items from '../data/promotions'

function Slider() {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const lastIndex = items.length - 1;
        if (index < 0){
        setIndex(lastIndex)
        } 
        if (index > lastIndex){
        setIndex(0)
        } 
    },[index])

    useEffect(() => {
        let slider = setInterval(() => {
        setIndex(index + 1)
        }, 4200)
        return () => clearInterval(slider )
    }, [index])


    return <div className="slider">

        <div className='left-btn' onClick={() => setIndex(index - 1)}>
        <i className="fa-solid fa-angle-left"></i>
        </div>

        {items.map((item, personIndex) => {
        let positon = 'nextSlide'
        if (personIndex === index){
            positon = 'activeSlide'
        }
        if (personIndex === index - 1 || (index === 0 && personIndex === items.length - 1)){
            positon = 'lastSlide'
        }
        const classes = `slide-item ${positon}`
        return <div className={classes} key={item.id}>
            <img src={item.img} alt={item.title} className="slide-photo" />
            <button className='slide-btn'>
            <Link to='/menu' >Mua ngay</Link>
            </button>
        </div>
        })}

        <div className='right-btn'onClick={() => setIndex(index + 1)} >
        <i className="fa-solid fa-angle-right"></i>
        </div>


    </div>;
}

export default Slider;