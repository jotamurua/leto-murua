import React from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";



export const ItemDetail = ({ product}) => {

  const [switchButtons, setSwitchButtons] = useState (true);
  const handleSwitch = value => setSwitchButtons(value)
    return (
      
      
      <article>
        <img src={product.img} alt="Foto del café" />
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        {switchButtons? <ItemCount stock={product.stock} control={handleSwitch} /> : <Link to="/cart"><button className="buttons">Terminar Compra</button></Link>}
        
        <p>Stock disponible: {product.stock}</p>
        </article>
     )
     
    }