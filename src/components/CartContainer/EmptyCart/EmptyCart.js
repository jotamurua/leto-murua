import React from "react";
import { Link } from "react-router-dom";


export const EmptyCart = () => {

return <section>
        <h1>Ups! Aún no añadiste productos a tu compra!</h1>
        <Link to="/"><button >Volver a la tienda!</button></Link>
        </section>
}