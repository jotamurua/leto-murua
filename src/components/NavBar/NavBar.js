import React from "react";
import "./NavBar.css"


export const NavBar = () => {
    return <nav className="menu">
      <label>Leto Brew Lab</label>
      <ul className="menu-list">
        <li className="item"><a href="/">Acerca de nosotros</a></li>
        <li className="item"><a href="/">Elaboraciones</a></li>
        <li className="item"><a href="/">Otros Productos</a></li>
      </ul>
      <span className="boton"><i className="fas fa-bars"></i></span>
  </nav> 
}