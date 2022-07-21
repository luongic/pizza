import items from '../data/menu'

function Modalproduct({id, close}) {
    const selectItem = items.filter((item) => item.id === id)

    return <div className='modal-product'>
        <div className='modal-product__content'>
            <div className='modal-product__close' onClick={() => close()}>X</div>
            <article key={id} className='modal-product__item'>
                <div className='modal-product__photo'>
                     <img className='modal-product__photo-img' src={selectItem[0].img} />
                </div>
                <div className='modal-product__info'>
                    <h4 className='modal-product__name'>{selectItem[0].title}</h4>
                    <div className='modal-product__text'>{selectItem[0].desc}</div>
                    <div className='modal-product__size-list' >
                        <div className='size-list__text'>Chọn cỡ bánh</div>
                        <div className='size-list__contain'>
                            <div className='size-list__size' >Nhỏ</div>
                            <div className='size-list__size' >Vừa</div>
                            <div className='size-list__size' >Lớn</div>
                        </div>
                    </div>
                    <div className='modal-product__size-list' >
                        <div className='size-list__text'>Chọn đế viền</div>
                    </div>
                    <div className='modal-product__bottom'>
                    <button className='modal-product__btn' >
                        <span>{selectItem[0].price[0]}.000₫</span>
                        
                        <span>Thêm vào giỏ hàng</span>
                    </button>
                    </div>
                    
                </div>
            </article>
        </div>
    </div>;
  }

  export default Modalproduct;