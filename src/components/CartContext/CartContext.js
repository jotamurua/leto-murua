import React from "react";
import { createContext, useState} from 'react';

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    const copyCart = [...cart]
    const itemInCart = (item) => cart.find(itemCart => itemCart.id === item.id) 

    const isInCart =(item) => cart.some(product => product.id === item.id)
    
    const addItem = (item, quantity) => { if(!isInCart(item)){
        setCart([...copyCart, {...item, quantity:quantity}])
    }else {
        
       itemInCart(item).quantity += quantity; 
        setCart([...copyCart])
    }
}

const removeItem = (item) => {if (item.quantity > 1){
    item.quantity -= 1
    setCart([...copyCart])
}else {
    setCart(copyCart.filter(product => product.id !== item.id))
}
}

    const clear = () => setCart([]);


    return <CartContext.Provider value={{ cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
}