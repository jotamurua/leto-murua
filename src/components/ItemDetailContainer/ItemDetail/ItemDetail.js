import React from "react";
import { ItemCount } from "../../ItemCount/ItemCount";




export const ItemDetail = ({ products}) => {
      const product =
      products.find (product => product.id === 3)

    return (
      
      
      <article key={product.id}>
        <img src={product.img} alt="Foto del café" />
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <button>description</button>
        <ItemCount stock={product.stock} />
        <button >Añadir a la compra</button>
        <p>Stock disponible: {product.stock}</p>
        </article>
     )
     
    }