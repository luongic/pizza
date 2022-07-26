import { useState } from 'react';
import stores from '../data/stores';
import Addresschange from './Addresschange';


function Addressconfirm() {

    const [activeChange, setActiveChange] = useState(false)

    const close = () =>{
        setActiveChange(false)
    }

    const method = (localStorage.getItem('method') ?? [])

    if (method === 'pickup'){
        const add = (JSON.parse(localStorage.getItem(method) ))
        const store = stores.find(stor => stor.name === add.store)

        return <>
                <div className="payment__add" >
                    <div className='payment__add-heading'>Cửa hàng bạn chọn là:</div>
                    <div className='payment__add-name'>{add.store}</div>
                    <div className='payment__add-detail'>ĐC: {store.address}, {store.subdis}, {store.district}</div>
                    <div className='payment__add-btn' onClick={() => setActiveChange(true)}>Thay đổi</div>

                </div>
                {activeChange && <Addresschange close={close}></Addresschange>}
        </>
    }
    else if (method === 'deli') {
        const add = (JSON.parse(localStorage.getItem(method)))
        return <>
                <div className="payment__add" >
                    <div className='payment__add-heading'>Địa chỉ nhận hàng của bạn là:</div>
                    <div className='payment__add-detail'>{add.detail}, {add.dis}, {add.city}</div>
                    <div className='payment__add-btn' onClick={() =>setActiveChange(true)}>Thay đổi</div>
                </div>
                {activeChange && <Addresschange close={close}></Addresschange>}
        </>;
    }
    else {
        <Addresschange close={close}></Addresschange>
        console.log('else');
    }

    


    
}

export default Addressconfirm;