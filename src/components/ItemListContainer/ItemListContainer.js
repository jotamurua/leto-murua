import React, { useEffect } from "react";
import "./ItemListContainer.css"
import { useState } from "react";
import products from "../utils/products";
import { ItemList } from "./ItemList/ItemList";
import { SpinnerCircular } from 'spinners-react';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from '../../firebase/firebase'
//import db from '../../firebase/firebase'


export const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [spinner, setSpinner] = useState(true);
    
    
    const {categoryid} = useParams();
    

    
    useEffect( () => {
      const db = getFirestore();
      

      // const q = query(
      //   collection(db, "procutos"),
      //   where("category", "==", `${categoryid}`)
      // );

      // getDocs(q).then((snapshot) => {
      //   if (snapshot.size === 0) {
      //     console.log("No hay resultados");
      //   }
      // setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
      // });
      
      const itemsCollection = collection(db, "productos");
      getDocs(itemsCollection).then((snapshot) => {
        
        setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));
        setSpinner(false)
      });
  }, []);

      //   const getItems = () => {
      //   return new Promise((resolve, reject) => {
      //     setTimeout (()=>{
      //       if(products.length > 0){
      //       resolve(products)} else {
      //           reject ("ERROR!!!!")
      //       }
      //     }, 2000);
          

      //   });
        
      // }
      
      // getItems()
      //   .then ((res) => categoryid? setItems(products.filter((product)=> product.category === `${categoryid}`)) : setItems((products)))
      //   .catch ((err)=>{console.log(err)})
      //   .finally(() => setSpinner(false))
      // ;}, [categoryid])      
        

    
    return (
        <div className="grid">
            <section>
                    {
                        spinner ? <SpinnerCircular /> : <ItemList products={items}/>
                    }
            </section>
        </div>)
}