import { createContext, useState } from "react";

const CartContext = createContext()


function CartProvider({children}) {
    const [lengthCart, setLengthCart] = useState(0)
    const [total, setTotal] = useState(0)

    const cartValue = {
        lengthCart,
        setLengthCart,
        total,
        setTotal
    }

    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    )
}



export {CartContext, CartProvider} 