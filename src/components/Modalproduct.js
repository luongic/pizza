import { useState } from 'react';
import items from '../data/menu'

function Modalproduct({id, close}) {

    const selectItem = items.filter((item) => item.id === id)

    const [sizeget, setSizeget] = useState(selectItem[0].size[0])
    const [crustget, setCrustget] = useState(selectItem[0].crust[0])

    const [price, setPrice] = useState(selectItem[0].price[0])

    const handleSize = (size) =>{
        setSizeget(size)

        if (size === 'Nhỏ'){
            setPrice(selectItem[0].price[0])
        }
        else if (size === 'Vừa'){
            if (crustget === 'viền xúc xích' || crustget === 'viền phô mai'){
                setPrice(selectItem[0].price[1]+ 69)
            }
            else{
                setPrice(selectItem[0].price[1])
            }
        }
        else if(size === 'Lớn'){
            if (crustget === 'viền xúc xích' || crustget === 'viền phô mai'){
                setPrice(selectItem[0].price[2]+ 89)
            }
            else{
                setPrice(selectItem[0].price[2])
            }
        }
    }

    const handleCrust = (crust) =>{
        setCrustget(crust)
        if (crust === 'viền xúc xích' || crust === 'viền phô mai'){
            if (sizeget === 'Vừa'){
                setPrice(selectItem[0].price[1]+ 69)
            }
            else {
                setPrice(selectItem[0].price[2]+ 89)
            }
        }
        else {
            if (sizeget === 'Vừa'){
                setPrice(selectItem[0].price[1])
            }
            else {
                setPrice(selectItem[0].price[2])
            }
        }
    }

    const sizes = selectItem[0].size;
    const crusts = selectItem[0].crust;

    return <div className='modal-product'>
        <div className='modal-product__content'>
            <div className='modal-product__close' onClick={() => close()}>X</div>
            <div key={id} className='modal-product__item'>
                <div className='modal-product__photo'>
                     <img className='modal-product__photo-img' src={selectItem[0].img} alt={selectItem[0].title} />
                </div>
                <div className='modal-product__info'>
                    <h4 className='modal-product__name'>{selectItem[0].title}</h4>

                    <div className='modal-product__info-content'>                    
                        <div className='modal-product__text'>{selectItem[0].desc}</div>

                        <div className='modal-product__size-list' >
                            <div className='size-list__text'>Chọn cỡ bánh: </div>
                            <div className='size-list__contain'>

                                {sizes.map((size, index) => { 
                                    if (size === 'Nhỏ'){
                                        if (sizeget === size) {
                                            return <div className='size-list__size' key={index} >
                                                <div className='size-list__size-contain active'>
                                                    <img src='/img/P.jpg' alt='pizzasizes' className='size-list__size-img' />
                                                    <div className='size-list__size-text' >{size}</div>
                                                </div>
                                            </div>;
                                        }
                                        else {
                                            return <div className='size-list__size' key={index} onClick={() => handleSize(size)} >
                                            <div className='size-list__size-contain'>
                                                <img src='/img/P.jpg' alt='pizzasizes' className='size-list__size-img' />
                                                <div className='size-list__size-text' >{size}</div>
                                            </div>
                                        </div>;
                                        }                                    
                                    }
                                    else if (size === 'Vừa'){
                                        if (sizeget === size) {
                                            return <div className='size-list__size' key={index} >
                                                <div className='size-list__size-contain active'>
                                                    <img src='/img/R.jpg' alt='pizzasizes' className='size-list__size-img' />
                                                    <div className='size-list__size-text' >{size}</div>
                                                </div>
                                            </div>;
                                        }
                                        else {
                                            return <div className='size-list__size' key={index} onClick={() => handleSize(size)} >
                                            <div className='size-list__size-contain'>
                                                <img src='/img/R.jpg' alt='pizzasizes' className='size-list__size-img' />
                                                <div className='size-list__size-text' >{size}</div>
                                            </div>
                                        </div>;
                                        }         
                                    }
                                    else{
                                        if (sizeget === size) {
                                            return <div className='size-list__size' key={index} >
                                                <div className='size-list__size-contain active'>
                                                    <img src='/img/L.jpg' alt='pizzasizes' className='size-list__size-img' />
                                                    <div className='size-list__size-text' >{size}</div>
                                                </div>
                                            </div>;
                                        }
                                        else {
                                            return <div className='size-list__size' key={index} onClick={() => handleSize(size)} >
                                            <div className='size-list__size-contain'>
                                                <img src='/img/L.jpg' alt='pizzasizes' className='size-list__size-img' />
                                                <div className='size-list__size-text' >{size}</div>
                                            </div>
                                        </div>;
                                        }         
                                    }
                                })}

                            </div>
                        </div>

                        <div className='modal-product__crust-list' >
                            <div className='crust-list__text'>Chọn đế viền</div>

                            <div className='crust-list__contain'>

                                {crusts.map((crust, index) => { 

                                    if (sizeget === 'Nhỏ'){
                                        if (crust === 'đế mỏng giòn'){
                                            if (crustget === crust) {
                                                return <div className='crust-list__crust' key={index} >
                                                    <div className='crust-list__crust-contain active'>
                                                        <img src='/img/C_T.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                        <div className='crust-list__crust-text' >{crust}</div>
                                                    </div>
                                                </div>;
                                            }
                                            else {
                                                return <div className='crust-list__crust' key={index} onClick={() => handleCrust(crust)} >
                                                <div className='crust-list__crust-contain'>
                                                    <img src='/img/C_T.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                    <div className='crust-list__crust-text' >{crust}</div>
                                                </div>
                                            </div>;
                                            }                                    
                                        }
                                        else if (crust === 'đế kéo tay truyền thống'){
                                            if (crustget === crust) {
                                                return <div className='crust-list__crust' key={index} >
                                                    <div className='crust-list__crust-contain active'>
                                                        <img src='/img/C_HT.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                        <div className='crust-list__crust-text' >{crust}</div>
                                                    </div>
                                                </div>;
                                            }
                                            else {
                                                return <div className='crust-list__crust' key={index} onClick={() => handleCrust(crust)} >
                                                <div className='crust-list__crust-contain'>
                                                    <img src='/img/C_HT.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                    <div className='crust-list__crust-text' >{crust}</div>
                                                </div>
                                            </div>;
                                            }         
                                        }
                                        else if (crust === 'đế giòn xốp'){
                                            if (crustget === crust) {
                                                return <div className='crust-list__crust' key={index} >
                                                    <div className='crust-list__crust-contain active'>
                                                        <img src='/img/C_P.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                        <div className='crust-list__crust-text' >{crust}</div>
                                                    </div>
                                                </div>;
                                            }
                                            else {
                                                return <div className='crust-list__crust' key={index} onClick={() => handleCrust(crust)} >
                                                <div className='crust-list__crust-contain'>
                                                    <img src='/img/C_P.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                    <div className='crust-list__crust-text' >{crust}</div>
                                                </div>
                                            </div>;
                                            }         
                                        }
                                    }
                                    else{
                                        if (crust === 'đế mỏng giòn'){
                                            if (crustget === crust) {
                                                return <div className='crust-list__crust' key={index} >
                                                    <div className='crust-list__crust-contain active'>
                                                        <img src='/img/C_T.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                        <div className='crust-list__crust-text' >{crust}</div>
                                                    </div>
                                                </div>;
                                            }
                                            else {
                                                return <div className='crust-list__crust' key={index} onClick={() => handleCrust(crust)} >
                                                <div className='crust-list__crust-contain'>
                                                    <img src='/img/C_T.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                    <div className='crust-list__crust-text' >{crust}</div>
                                                </div>
                                            </div>;
                                            }                                    
                                        }
                                        else if (crust === 'đế kéo tay truyền thống'){
                                            if (crustget === crust) {
                                                return <div className='crust-list__crust' key={index} >
                                                    <div className='crust-list__crust-contain active'>
                                                        <img src='/img/C_HT.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                        <div className='crust-list__crust-text' >{crust}</div>
                                                    </div>
                                                </div>;
                                            }
                                            else {
                                                return <div className='crust-list__crust' key={index} onClick={() => handleCrust(crust)} >
                                                <div className='crust-list__crust-contain'>
                                                    <img src='/img/C_HT.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                    <div className='crust-list__crust-text' >{crust}</div>
                                                </div>
                                            </div>;
                                            }         
                                        }
                                        else if (crust === 'đế giòn xốp'){
                                            if (crustget === crust) {
                                                return <div className='crust-list__crust' key={index} >
                                                    <div className='crust-list__crust-contain active'>
                                                        <img src='/img/C_P.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                        <div className='crust-list__crust-text' >{crust}</div>
                                                    </div>
                                                </div>;
                                            }
                                            else {
                                                return <div className='crust-list__crust' key={index} onClick={() => handleCrust(crust)} >
                                                <div className='crust-list__crust-contain'>
                                                    <img src='/img/C_P.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                    <div className='crust-list__crust-text' >{crust}</div>
                                                </div>
                                            </div>;
                                            }         
                                        }
                                        else if (crust === 'viền xúc xích'){
                                            if (crustget === crust) {
                                                return <div className='crust-list__crust' key={index} >
                                                    <div className='crust-list__crust-contain active'>
                                                        <img src='/img/C_SCP.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                        <div className='crust-list__crust-text' >{crust}</div>
                                                    </div>
                                                </div>;
                                            }
                                            else {
                                                return <div className='crust-list__crust' key={index} onClick={() => handleCrust(crust)} >
                                                <div className='crust-list__crust-contain'>
                                                    <img src='/img/C_SCP.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                    <div className='crust-list__crust-text' >{crust}</div>
                                                </div>
                                            </div>;
                                            }         
                                        }
                                        
                                        else{
                                            if (crustget === crust) {
                                                return <div className='crust-list__crust' key={index} >
                                                    <div className='crust-list__crust-contain active'>
                                                        <img src='/img/C_CCP.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                        <div className='crust-list__crust-text' >{crust}</div>
                                                    </div>
                                                </div>;
                                            }
                                            else {
                                                return <div className='crust-list__crust' key={index} onClick={() => handleCrust(crust)} >
                                                <div className='crust-list__crust-contain'>
                                                    <img src='/img/C_CCP.jpg' alt='pizzacrusts' className='crust-list__crust-img' />
                                                    <div className='crust-list__crust-text' >{crust}</div>
                                                </div>
                                            </div>;
                                            }         
                                        }
                                    }

                                    
                                })}

                            </div>
                        </div>
                        <div className='modal-product__bottom'>
                        
                    </div>

                    <button className='modal-product__btn' onClick={()=>{
                        console.log('thêm vào giỏ hàng: ', selectItem[0].title, 'size: ', sizeget, 'vien: ', crustget, 'tong cong: ', price)}}
                         >
                            <span>{price}.000₫</span>
                            
                            <span>Thêm vào giỏ hàng</span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>;
  }

  export default Modalproduct;