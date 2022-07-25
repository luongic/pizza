import { useContext } from "react";
import { CartContext } from "./CartContext";
import Overlay from './Overlay';

function Confirmdel({index, close}) {
    const context = useContext(CartContext)
    const bills = ((JSON.parse(localStorage.getItem('bill'))) ?? [])

    function delFromcart(index){
        const delItem = bills.slice(0,index).concat(bills.slice(index+1))
        localStorage.setItem('bill', JSON.stringify(delItem))
    }

    const handleDel = index =>{
        delFromcart(index)
        context.setLengthCart(context.lengthCart -= 1)
        close()
    }

    const selectItem = bills[index]

    return <>
                <Overlay>
                    <div className="confirm-container">
                        <div className="confirm-close" onClick={close} >X</div>
                        <div className="confirm__heading">
                            Bạn có muốn xóa món
                        </div>
                        <div className="confirm__content">
                            <div className="confirm__content-name">{selectItem.title} <span className="confirm__content-quantity">x</span>{selectItem.quantity}</div>
                            <div className="confirm__content-info">
                                {selectItem.size !== '' ? <> <div className="confirm__content-size">Size: {selectItem.size} -</div>
                                <div className="confirm__content-crust">{selectItem.crust}</div> </> : <></>}
                                
                            </div>
                        </div>
                        
                        <div className="confirm__btn-contain">
                            <div className="confirm-btn-no" onClick={close}>Hủy</div>
                            <div className="confirm-btn-yes" onClick={() => handleDel(index)}>Đồng ý</div>
                        </div>
                        
                    </div>
                </Overlay>
    </>
    
}

export default Confirmdel