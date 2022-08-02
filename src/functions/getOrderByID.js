

const getOrderByID = (id) => {
    const order = (JSON.parse(localStorage.getItem('orders')))
    const currentOrder = order.find(item => item.orderID === id)
    return currentOrder
}

export default getOrderByID;