

function delFromcart(index){
    const getBill = ((JSON.parse(localStorage.getItem('bill'))) ?? [])
    const delItem = getBill.slice(0,index).concat(getBill.slice(index+1))
    localStorage.setItem('bill', JSON.stringify(delItem))
}

export default delFromcart;