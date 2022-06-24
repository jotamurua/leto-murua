import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import products from "../utils/products";
import { SpinnerCircular } from 'spinners-react';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";




export const ItemDetailContainer = () => {
 
    const {id} = useParams()
    const [item, setItem] = useState ([])
    const [spinner, setSpinner] = useState(true)

    

    useEffect( () => {
        const getItem = () => {
        return new Promise((resolve, reject) => {
          setTimeout (()=>{
            if(products.length > 0){
            resolve(products)} else {
                reject (console.log("ERROR!"))
            }
          }, 2000);
          

        });
        
        
      }
      
      getItem()
        .then ((res) => setItem(products.find (product => product.id === `${id}`
          )))
        .catch ((message)=>{console.log(message)})
        .finally(() => setSpinner(false))
          
        ;}, [id])
        
    return (
      
        <div className="grid">
          
            <section>
                    {
                        spinner? <SpinnerCircular /> : <ItemDetail product = {item} /> 
                    }
            </section>
        </div>)

}