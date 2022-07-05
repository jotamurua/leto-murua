import React from "react";
import { createContext, useContext, useState} from 'react';

export const CartContext = createContext();
console.log(CartContext + "vengo de cartcontext")
export const CartProvider = ({children}) => {
    const [test, setTest] = useState ([])

    const addTest = (value) => setTest([...test, value]); 
    // const [cart, setCart] = useState ([]);
    // const addItem = (item, quantity) => {
    //     const newItem = {...item, quantity}; 
    //     setCart([...cart, newItem])
    // }

    console.log(test)

    return <CartContext.Provider value={{ addTest}}>
        {children}
    </CartContext.Provider>
}