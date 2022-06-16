import React from "react";
import { Items } from "../Items/Items.js";
import "./ItemList.css"

export const ItemList = ({products}) => {
 return (
     products.map(p => 
        
        <Items 
            key={p.id}
            {...p}
        />

        )
 )
}