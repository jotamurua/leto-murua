import React from "react";
import { CartDetail } from "../CartDetail/CartDetail";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import "./CartList.css";

export const CartList = ({items}) => {
    const {removeItem} = useContext (CartContext)
    const restarCantidad = (item) => {
        removeItem (item)}
    return items
    .map(item => 
    
    <section key={item.id}>
        <div className="cart">
            <CartDetail key= { item.id} {...item}/>
            <button onClick={() => {restarCantidad(item)}}><ion-icon name="bag-remove" size="large"></ion-icon></button>
        </div>
    </section>) 
}

