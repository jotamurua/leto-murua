import React from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import "./Items.css"

export const Items = ({img, name, price, stock}) => {
    return <div className="item-container">
        <img src={img} alt="Foto del café" />
        <h1>{name}</h1>
        <p>${price}</p>
        <ItemCount stock={stock} />
    </div>
}
