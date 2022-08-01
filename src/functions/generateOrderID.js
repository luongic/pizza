

function generateOrderID() {
    const lastID = ((JSON.parse(localStorage.getItem('orders')))?? [])
    if (lastID.length === 0){
        return 240920
    }
    else{
        return (lastID.at(-1).orderID + 1)
    }
}

export default generateOrderID;