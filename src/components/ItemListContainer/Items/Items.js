import React from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import "./Items.css"

export const Items = ({ id, img, title, price, stock}) => {
    return <article key={id}>
        <img src={img} alt="Foto del café" />
        <h1>{title}</h1>
        <p>${price}</p>
        <button>description</button>
        <ItemCount stock={stock} />
        <button>Añadir a la compra</button>
        <p>Stock disponible: {stock}</p>
        </article>
}
