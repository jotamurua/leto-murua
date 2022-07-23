import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { EmptyCart } from "./EmptyCart/EmptyCart";
import { CartDetail } from "./CartDetail/CartDetail";
import {  Formulario } from "./Formulario/Formulario";
import "./CartContainer.css"


export const CartContainer = () => {
    const {cart } = useContext(CartContext);
    


    const res = cart.reduce((acc, item) => {
        return acc = acc + (item.price*item.quantity);
    }, 0)

    const {removeItem} = useContext (CartContext)
    const restarCantidad = (item) => {
        removeItem (item)}

    
    
    return (
        cart.length?
        <> 
            <section className="cart-section">
            {cart.map 
            (item => 
            <article key={item.id} className="articulocart">
                <CartDetail key= { item.id} {...item}/>
            <button onClick={() => {restarCantidad(item)}}><ion-icon name="bag-remove" size="large" className="botonrest"></ion-icon></button>
            </article>
            )}
            </section>
            <h6>El total es: ${res} </h6>
            <Formulario total= {res}/>
        </> :
        <EmptyCart/>
        )
    }