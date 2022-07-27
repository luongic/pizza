

import Addressconfirm from "./Addressconfirm";
import ReciverInformation from "./ReciverInformation";
import Voucher from "./Voucher";
import Bill from "./Bill";

function Payment() {

    return( <>
                <div className="payment">
                    <Addressconfirm />
                    <ReciverInformation />
                    <Voucher />
                    <Bill />
                </div>
                
            </>);
}

export default Payment;