import getOrderByID from "../functions/getOrderByID";

function Receipt () {

  const receipt = getOrderByID(240920)
  
  console.log(receipt);

    return <div className="receipt">
      <div className="receipt__contain">Đặt hàng thành công !</div>
      <div className="receipt__contain">Đặt hàng thành công !</div>
    </div>;
}


export default Receipt;