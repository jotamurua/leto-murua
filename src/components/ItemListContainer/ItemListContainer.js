import React, { useEffect } from "react";
import "./ItemListContainer.css"
import { useState } from "react";
import products from "../utils/products";
import { ItemList } from "./ItemList/ItemList";
import { SpinnerCircular } from 'spinners-react';
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [spinner, setSpinner] = useState(true);
    
    
    const {categoryid} = useParams();
    

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
        .then ((res) => categoryid? setItems(products.filter((product)=> product.category === `${categoryid}`)) : setItems((products)))
        .catch ((message)=>{console.log(message)})
        .finally(() => setSpinner(false))
          
        ;}, [categoryid])
        

    
    return (
        <div className="grid">
            <section>
                    {
                        spinner ? <SpinnerCircular /> : <ItemList products={items}/>
                    }
            </section>
        </div>)
}