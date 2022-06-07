import React from "react";
import "./NavBar.css"
import { CartWidget } from "./CartWidget/CartWidget";


export const NavBar = () => {
    return <nav className="menu">
      <span className="boton"><i className="fas fa-bars"></i></span>
      <label>LETO BREW LAB</label>
      <ul className="menu-list">
        <li className="item"><a href="/">ACERCA DE NOSOTROS</a></li>
        <li className="item"><a href="/">ELABORACIONES</a></li>
        <li className="item"><a href="/">OTROS PRODUCTOS</a></li>
      </ul>
      <CartWidget />
  </nav> 
}