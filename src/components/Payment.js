

import Addressconfirm from "./Addressconfirm";
import Bill from "./Bill";

function Payment() {

    return( <>
                <div className="payment">
                    <Addressconfirm />
                    <Bill />
                </div>
                
            </>);
}

export default Payment;