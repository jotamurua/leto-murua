import React from "react";
import { Items } from "../Items/Items.js";
import "./ItemList.css"

export const ItemList = ({products}) => {
 return (
     products.map(p => 
        <div className="item-container"><Items
            {...p}
        />
        </div>
        )
 )
}