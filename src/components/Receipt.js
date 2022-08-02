import { Link, useParams } from "react-router-dom";

import getOrderByID from "../functions/getOrderByID";

function Receipt () {
  const params = useParams()

  const id = Number(params.id)

  const receipt = getOrderByID(id)
  
  console.log(receipt);

    return <div className="receipt">
      <div className="receipt__contain">
        <div className="receipt__contain-heading">Đặt hàng thành công !</div>
        <div className="receipt__contain-text">Mã đơn hàng: #{id}</div>
        <div className="receipt__contain-link">Xem trạng thái đơn hàng <Link to={`tracking/${id}`}  >tại đây !</Link>
        </div>
      </div>
    </div>;
}


export default Receipt;