import React from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import "./Items.css";
import { Link} from 'react-router-dom';
import { useState } from "react";


export const Items = ({ id, img, title, price, stock}) => {


  
    return <article key={id}>

        <img src={img} alt="Foto del café" />
        <h1>{title}</h1>
        <p>${price}</p>
        <Link to={`/item/${id}`}><button className="buttons">¡Ver más!</button></Link>
       <ItemCount stock={stock} />
        
        <p>Stock disponible: {stock}</p>
        </article>
}
