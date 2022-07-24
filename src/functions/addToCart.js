

function addToCart(title, size, crust, price) {
    
    const getBill = ((JSON.parse(localStorage.getItem('bill'))) ?? [])

    const newBill = {
        title: title,
        size: size,
        crust: crust,
        price: price,
        quantity: 1
    }

    const bill = getBill.find(bill => (bill.title === title && bill.size === size && bill.crust === crust));

    if (bill){
        bill.quantity += 1
    }
    else {
        getBill.push(newBill)
    }

    localStorage.setItem('bill', JSON.stringify(getBill))
}

export default addToCart;