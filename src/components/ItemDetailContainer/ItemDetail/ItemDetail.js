import React from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";



export const ItemDetail = ({ product}) => {

  const [itemQuantity, setItemQuantity] = useState (0);
  const quantityController = value => setItemQuantity(value)

    return (
      
      
      <article>
        <img src={product.img} alt="Foto del café" />
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        {itemQuantity<1? <ItemCount stock={product.stock} control={quantityController} /> : <Link to="/cart"><button className="buttons">Terminar Compra</button></Link>}
        
        <p>Stock disponible: {product.stock}</p>
        </article>
     )
     
    }