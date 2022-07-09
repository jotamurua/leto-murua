import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";


export const Cart = () => {
    const {cart, removeItem, } = useContext(CartContext)
    const restarCantidad = (item) => {
        removeItem (item)
    }
    console.log()
    return (
    cart.map (item => <>
    <section key={item.id}><h1 key={item.id}>{item.title} y {item.quantity}</h1>
    <button onClick={() => {restarCantidad(item)}}>restarcantidad</button>
    </section></>))
}