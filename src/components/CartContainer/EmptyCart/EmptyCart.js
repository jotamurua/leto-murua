import React from "react";
import { Link } from "react-router-dom";
import './EmptyCart.css'


export const EmptyCart = () => {

return <section className="emptycart">
        <div className="mensajesempty">
                <h1>Ups! Aún no añadiste productos a tu compra!</h1>
                <Link to="/" className="link-component">Volver a la tienda!</Link>
        </div>
        <div className="imagenempty">
        <img src="https://firebasestorage.googleapis.com/v0/b/murua-leto.appspot.com/o/Introducci%C3%B3n%20(3).png?alt=media&token=e6bd67b4-dfa5-424f-a3ef-a9ee77ac3c15" alt="café confundido"/>
        </div>
        
        </section>
}