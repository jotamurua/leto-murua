import React, { useEffect } from "react";
import "./ItemListContainer.css"
import { useState } from "react";
import { customFetch } from "../utils/customFetch";
import products from "../utils/products";
import { ItemList } from "./ItemList/ItemList";
import { SpinnerCircular } from 'spinners-react';

export const ItemListContainer = () => {
    const [items, setItems] = useState ([])

    useEffect( () => {
        customFetch(2000, products)
        .then(resultado => setItems(resultado))
    }, [items])

    
    return (
        <div className="grid">
            <section>
                    {
                        items?.length <= 0 ?  <SpinnerCircular /> : 
                        <ItemList products={items}/> 
                    }
            </section>
        </div>)
}