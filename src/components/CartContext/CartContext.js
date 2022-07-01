import React from "react";
import { createContext, useContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ();

    const agregarCart = itemId => setCart (itemId);

    return <CartContext.Provider value={{cart, agregarCart}}>
        {children}
    </CartContext.Provider>
}