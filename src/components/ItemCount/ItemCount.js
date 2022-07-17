import React from "react";
import { useState } from "react";
import "./ItemCount.css"

export const ItemCount = ({initial, stock, control, addItem}) => {


    const [ count, setCount ] = useState(initial);
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
            <div className="buttonsbags">
                <button onClick={subs} disabled={count === initial} > <ion-icon name="bag-remove" size="large"></ion-icon></button>
                <span> {count}  </span>
                <button onClick={adding} disabled={count === stock}><ion-icon name="bag-add" size="large"></ion-icon></button>
            </div>
            <button className="buttons" disabled={count === 0} onClick={() => control(count)}>Añadir a la compra</button>
        </div>
    )
}