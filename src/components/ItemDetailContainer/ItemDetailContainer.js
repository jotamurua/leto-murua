import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import products from "../utils/products";
import { SpinnerCircular } from 'spinners-react';
import { ItemDetail } from "./ItemDetail/ItemDetail";




export const ItemDetailContainer = () => {
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
                        items.length? <ItemDetail products = {items} /> :  <SpinnerCircular /> 
                    }
            </section>
        </div>)

}