import React from "react";
import "./CartWidget.css"
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link , NavLink} from "react-router-dom";
import { Reddit } from "react-bootstrap-icons";


export const CartWidget = () => {
    const {cart } = useContext(CartContext)
    return <div className="widget" style={{opacity: cart.length? "1" : "0"}}>
    <p>{cart.length}</p>    
    <NavLink to='/cart' className={({isActive}) => isActive? 'currentcategory' : ''}><ion-icon className="cart-widget" name="bag-handle" size="large"></ion-icon></NavLink>
    </div>
}