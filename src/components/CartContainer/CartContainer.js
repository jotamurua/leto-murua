import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { CartList } from "./CartList/CartList";
import { EmptyCart } from "./EmptyCart/EmptyCart";


export const CartContainer = () => {
    const {cart } = useContext(CartContext);
    


    const res = cart.reduce((acc, item) => {
        return acc = acc + (item.price*item.quantity);
    }, 0)
    
    return (
        cart.length?
        <> 
            <CartList items = {cart} />
            <h6>El total es: ${res} </h6>
        </> :
        <EmptyCart/>
        )
    }