
function Modalpromotion({close}) {
    return <div className="modal-container">
        <div className="modal-close" onClick={close} >X</div>
        <img className="modal-img" src="/img/modal_promotion.jpg" />
        <div className="modal-btn" onClick={close}>Tiến hành đặt hàng</div>
    </div>
}

export default Modalpromotion