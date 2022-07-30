import Addressconfirm from "./Addressconfirm";
import Quotetime from "./Quotetime";
import ReciverInformation from "./ReciverInformation";
import Voucher from "./Voucher";
import Bill from "./Bill";
import Paymentmethod from "./Paymentmethod";

function Payment() {

    return( <>
                <div className="payment">
                    <Addressconfirm />
                    <Quotetime />
                    <ReciverInformation />
                    <Voucher />
                    <Bill />
                    <Paymentmethod />
                </div>
                
            </>);
}

export default Payment;