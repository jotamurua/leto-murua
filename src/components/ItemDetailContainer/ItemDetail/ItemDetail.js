import React, { useContext } from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import "./ItemDetail.css"



export const ItemDetail = ({ product}) => {

  const [itemQuantity, setItemQuantity] = useState (0);
   const { addItem } = useContext(CartContext)
  const quantityController = 
    quantity => setItemQuantity(quantity)

  const toCart = () =>
    addItem({...product}, itemQuantity);

   


  
  
    return (
      
      
      <article className="itemdetail">
        <img src={product.img} alt="Foto del café" className="imgdetail" />
        <h1 className="titulodetail">{product.title}</h1>
        <p className="preciodetail">${product.price}</p>
       <div className="switchbutton">
          {itemQuantity<1? 
            <ItemCount initial={1} stock={product.stock} control={quantityController} /> :
            <Link to="/cart"><button className="buttons" onClick={() => {toCart()}}>Confirmar e ir al Carrito</button></Link>}
          <p className="stockdetail">Stock disponible: {product.stock}</p>
        </div>
        <p className="descripciondetail">{product.description}</p>
      </article>
     )
     
    }



