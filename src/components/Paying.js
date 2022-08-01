import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import toast from "../functions/toast";

const paymethod = [
    {
        name: 'tiền mặt',
        img: '/img/cash.png',
        discount: 0,
        method: 'cash',
    },
    {
        name: 'Visa',
        img: '/img/visa.png',
        discount: 0,
        method: 'visa',
    },
    {
        name: 'ATM',
        img: '/img/atm.png',
        discount: 0,
        method: 'atm',
    },
    {
        name: 'VNPay',
        img: '/img/vnpay.png',
        discount: 0,
        method: 'vnpay',
    },
    {
        name: 'MOMO',
        img: '/img/momo.png',
        discount: 0,
        method: 'momo',
    },
]

function Paying() {
    const {method , id } = useParams()
    const getOrder = ((JSON.parse(localStorage.getItem('orders'))) ?? [])
    const order = getOrder.find(item => (item.orderID === Number(id) ) );

    const payname = paymethod.find(item => item.method === method).name

    const randomCODE = (Math.floor(100000 + Math.random() * 900000)).toString()

    const handleConfirm = () => {
        const inputValue = document.querySelector('#inputvalue').value

        if (inputValue === randomCODE || inputValue === id.toString() ){
            toast({
                title: `Thanh toán thành công #${id}`,
                message: `Phương thức thanh toán ${method}`,
                type: "success",
                duration: 3000
            })
        }
        else{
            toast({
                title: "Thanh toán không thành công",
                message: `Mã nhập vào không chính xác`,
                type: "warning",
                duration: 3000
            })
            document.getElementById("inputvalue").focus();
        }
    }
    
    return  <div className="paying-qr">
                <div className="paying-qr__contain" >
                    
                    <div className="paying-qr__content">
                        <div className="paying-qr__code">
                            <div style={{ background: 'white'}}>
                                <QRCode value={randomCODE} />
                            </div>
                        </div>
                        <div className="paying-qr__confirm">
                            <div className="paying-qr__heading">Bạn đang chọn phương thức thanh toán bằng {payname}</div>
                            <div className="paying-qr__heading">Đơn hàng #{id}</div>
                            <div className="paying-qr__heading">Số tiền là {order.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                            <input className="paying-qr__input" id="inputvalue" placeholder="Nhập mã quét được từ QR" type="input" defaultValue=""></input>
                            <div className="paying-qr__btn" onClick={() => handleConfirm()} >Xác nhận</div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Paying;