import React from "react";
import "./NavBar.css"
import { CartWidget } from "./CartWidget/CartWidget";


export const NavBar = () => {
    return <nav className="menu">
      <span className="boton"><i className="fas fa-bars"></i></span>
      <label>LETO BREW LAB</label>
      <ul className="menu-list">
        <li className="item"><a href="/">ACERCA DE NOSOTROS</a></li>
        <li className="item"><a href="/">PRODUCTOS</a></li>
        <li className="item"><a href="/">SERVICIOS</a></li>
      </ul>
      <CartWidget />
  </nav> 
}