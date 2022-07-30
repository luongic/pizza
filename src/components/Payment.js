

import Addressconfirm from "./Addressconfirm";
import ReciverInformation from "./ReciverInformation";
import Voucher from "./Voucher";
import Bill from "./Bill";
import Paymentmethod from "./Paymentmethod";

function Payment() {

    return( <>
                <div className="payment">
                    <Addressconfirm />
                    <ReciverInformation />
                    <Voucher />
                    <Bill />
                    <Paymentmethod />
                </div>
                
            </>);
}

export default Payment;