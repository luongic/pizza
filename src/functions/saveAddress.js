
function saveAddress(type, city, dis, subdis, store, detail) {
    
    if (type === 'pickup') {
        const newAddress = {
            type: type,
            city: city,
            dis: dis,
            subdis: subdis,
            store: store,
            detail: detail
        }

        
    
        localStorage.setItem('pickup', JSON.stringify(newAddress))
    }
    else {
        const newAddress = {
            type: type,
            city: city,
            dis: dis,
            detail: detail
        }
    
        localStorage.setItem('deli', JSON.stringify(newAddress))
    }

    
 
}

export default saveAddress;