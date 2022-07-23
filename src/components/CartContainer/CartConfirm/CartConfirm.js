import {  useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";


export const CartConfirm = () => {
    const {orderId, setId} = useContext(CartContext);
   
  
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