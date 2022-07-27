

import Addressconfirm from "./Addressconfirm";
import ReciverInformation from "./ReciverInformation";
import Bill from "./Bill";

function Payment() {

    return( <>
                <div className="payment">
                    <Addressconfirm />
                    <ReciverInformation />
                    <Bill />
                </div>
                
            </>);
}

export default Payment;