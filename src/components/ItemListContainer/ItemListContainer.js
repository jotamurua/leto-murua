import React, { useEffect } from "react";
import "./ItemListContainer.css"
import { useState } from "react";
import { customFetch } from "../utils/customFetch";
import products from "../utils/products";
import { ItemList } from "./ItemList/ItemList";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState ([])

    useEffect( () => {
        customFetch(3000, products)
        .then(resultado => setItems(resultado))
    }, [items])

    
    return (
        <div className="item-container">
            <section>
                <article>
                    {
                        items?.length <= 0 ?  <h1>CARGANDO...</h1> : 
                        <ItemList products={items}/> 
                    }
                </article>
            </section>
        </div>)
}