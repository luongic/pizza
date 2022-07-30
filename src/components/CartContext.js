import { createContext, useState } from "react";

const CartContext = createContext()


function CartProvider({children}) {
    const [lengthCart, setLengthCart] = useState(0)
    const [total, setTotal] = useState(0)
    const [voucher, setVoucher] = useState(0)
    const [method, setMethod] = useState(((localStorage.getItem('method'))) ?? [])

    const [delifee, setDelifee] = useState(method === 'pickup' ? 0 : 22)

    

    const cartValue = {
        lengthCart,
        setLengthCart,
        total,
        setTotal,
        voucher,
        setVoucher,
        method,
        setMethod,
        delifee,
        setDelifee,
    }

    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    )
}



export {CartContext, CartProvider} 