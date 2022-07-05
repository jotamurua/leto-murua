import React, { useContext } from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";



export const ItemDetail = ({ product}) => {

  const [itemQuantity, setItemQuantity] = useState (0);
  const [img, setImg] = useState(product.img);
  const [price, setPrice] = useState(product.price);
  const [title, setTitle] = useState(product.title);
  const [id, setId] = useState (product.id);
  // const { addItem } = useContext (CartContext);
  const { addTest } = useContext(CartContext)
  const quantityController = 
    value =>  addTest({id, price, title, img, value});
   

//   const submitItem = (e) => {
//   e.preventDefault();
//   addItem({id, img, price, title, itemQuantity});
// }

  
  
    return (
      
      
      <article>
        <img src={product.img} alt="Foto del café" />
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        {itemQuantity<1? <ItemCount initial={1} stock={product.stock} control={quantityController} /> : <Link to="/cart"><button className="buttons">Terminar Compra</button></Link>}
        <p>Stock disponible: {product.stock}</p>
        </article>
     )
     
    }