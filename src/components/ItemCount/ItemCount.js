import React from "react";
import { useState } from "react";

export const ItemCount = ({stock, control}) => {


    const [ count, setCount ] = useState(0);
   
    function adding () {
        if (count < stock ) {
            setCount ((prevCount) => prevCount + 1 );
        }
    }
    function subs () {
        if (count > 0 ) {
            setCount ((prevCount) => prevCount -1 );
        }
    }
    return (
        <div>

            <button onClick={subs} disabled={count === 0} > <ion-icon name="bag-remove" size="large"></ion-icon></button>
            <span> {count}  </span>
            <button onClick={adding} disabled={count === stock}><ion-icon name="bag-add" size="large"></ion-icon></button>
            <button className="buttons" onClick={() => {control({count})}}>Añadir a la compra</button>
        </div>
    )
}