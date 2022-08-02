import { useParams } from "react-router-dom";

import getOrderByID from "../functions/getOrderByID";

function Receipt () {
  const params = useParams()

  const id = Number(params.id)

  const receipt = getOrderByID(id)
  
  console.log(receipt);

    return <div className="receipt">
      <div className="receipt__contain">Đặt hàng thành công !</div>
      <div className="receipt__contain">Mã đơn hàng: #{id}</div>
    </div>;
}


export default Receipt;