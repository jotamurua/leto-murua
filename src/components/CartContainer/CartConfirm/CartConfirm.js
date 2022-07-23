import {  useContext, useState, useEffect } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";


export const CartConfirm = () => {
    const {orderId, clear, setId} = useContext(CartContext);
   const [idOrder, setIdOrder] = useState();
   const clearCart = () => {
    clear()
};
   useEffect (() => {
    
    setIdOrder(orderId)
   },[orderId])
 return (
    <section>
        <article>
         <h1>¡Muchas gracias por tu compra!</h1>
         <h5>el ID de tu pedido es {orderId}</h5>
         <Link to='/' onClick={() => {setId()} }> Volver a la tienda.</Link>
        </article>
    </section>
 )
}