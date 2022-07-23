import {  useContext, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";


export const CartConfirm = () => {
    const {orderId} = useContext(CartContext)
    
 return (
    <section>
        <article>
         <h1>¡Muchas gracias por tu compra!</h1>
         <h5>el ID de tu pedido es {orderId}</h5>
        </article>
    </section>
 )
}