import React from "react";

export const CartDetail = ({...item}) => {

    return (<>

        <div className="imgcart">
         <img src={item.img} alt="Foto del café"  /> 
         </div>
        <div className="titulocart">
        <h1 >{item.title}</h1> 
        </div>
        <div className="cantidades">
            <p>Stock disponible: {item.stock}</p>
            <h6>Cantidad seleccionada: {item.quantity}</h6>
        </div>

        <div className="precios">
            <p>${item.price}</p>   
            <p>Sub-total: $ {item.quantity * item.price }</p>
        </div>
        </>
    )
}


