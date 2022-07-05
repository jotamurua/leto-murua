import React from "react";
import { createContext, useContext, useState} from 'react';

export const CartContext = createContext();
console.log(CartContext)
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    const addItem = (item, quantity) => {
        const newItem = {...item, quantity}; 
        setCart([...cart, newItem])
    }

    

    return <CartContext.Provider value={{cart, addItem}}>
        {children}
    </CartContext.Provider>
}