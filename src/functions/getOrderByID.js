

const getOrderByID = (id) => {
    const order = (JSON.parse(localStorage.getItem('orders')) ?? [])
    if (order.length === 0){
        return []
    }
    else {
        const currentOrder = order.find(item => item.orderID === id)
        return currentOrder
    }
}

export default getOrderByID;