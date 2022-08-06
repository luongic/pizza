import { useState } from 'react';
import stores from '../data/stores';
import Addresschange from './Addresschange';
import Quotetime from './Quotetime';


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
                    <div className='payment__add-detail'>ĐC: {store.address}, {store.subdis}, {store.district}, {store.city}</div>
                    <div className='payment__add-btn' onClick={() => setActiveChange(true)}>Thay đổi</div>
                    <Quotetime />
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
                
                {activeChange && <Addresschange close={close}></Addresschange>} 

                <Quotetime />

                    <div className='method-content__subdistrict' >
                        <div className='method-label'>Ghi chú cho người giao hàng: </div>
                        <input type="text" id='addressnote' className='method-content__address-number' placeholder='Ví dụ: Đối diện Tòa nhà ABC...'/>
                    </div>
                </div>
        </>;
    }
    else {
        console.log('chưa có địa chỉ');
        return <Addresschange close={close}></Addresschange>;
    }

    


    
}

export default Addressconfirm;