import Modalpromotion from "./Modalpromotion"

function Overlay({close}) {
    return <div className="overlay">
        <Modalpromotion close={close} />
    </div>
}


export default Overlay