import React, { useEffect } from "react";
import "./ItemListContainer.css"
import { useState } from "react";
import products from "../utils/products";
import { ItemList } from "./ItemList/ItemList";
import { SpinnerCircular } from 'spinners-react';

export const ItemListContainer = () => {
    const [items, setItems] = useState ([])
    const [spinner, setSpinner] = useState(false)

    useEffect( () => {
        const getItems = () => {
        return new Promise((resolve, reject) => {
          setTimeout (()=>{
            if(products.length > 0){
            resolve(products)} else {
                reject (console.log("ERROR!!!!"))
            }
          }, 2000);
          

        });
        
      }
      
      getItems()
        .then ((items) => setItems(products))
        .catch (setSpinner(true))
          
        ;}, [items])
        

    
    return (
        <div className="grid">
            <section>
                    {
                        items.length ? <ItemList products={items}/> : <SpinnerCircular />
                    }
            </section>
        </div>)
}