import React from "react";
export const CartDetail = ({...item}) => {

    return (<article>
         <img src={item.img} alt="Foto del café" /> 
        <h1>{item.title}</h1>
        <p>${item.price}</p>    
        <p>Stock disponible: {item.stock}</p>
        <h6>Cantidad seleccionada: {item.quantity}</h6>
        <p>Sub-total: $ {item.quantity * item.price }</p>
        </article>
    )
}


