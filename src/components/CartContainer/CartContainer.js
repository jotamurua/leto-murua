import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { CartList } from "./CartList/CartList";


export const CartContainer = () => {
    const [total, setTotal ] = useState (0)
    const {cart } = useContext(CartContext)
    const sumaTotal =() => { cart.forEach(item => setTotal (total + (item.price * item.quantity)) )}

   

    return (
        <section> 
            <CartList items = {cart} />
            <button onClick={() => {sumaTotal()}}>aber</button>
            <h6>El total es: ${total} </h6>
        </section>)
    }
    
    



/* const restarCantidad = (item) => {
        removeItem (item) */