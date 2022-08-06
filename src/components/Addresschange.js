import Overlay from "./Overlay";
import OrderMethod from "./OrderMethod";


function Addresschange({close}) {
    return  <Overlay >
                <div className="payment__modal-container">
                    <div className="payment__modal-close" onClick={close} >X</div>
                    
                        <OrderMethod close={close} > </OrderMethod>
                    
                </div>
            </Overlay>
}

export default Addresschange;