import React, { useEffect } from "react";
import "./ItemListContainer.css"
import { useState } from "react";
import { ItemList } from "./ItemList/ItemList";
import { SpinnerCircular } from 'spinners-react';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import  { app } from "../../firebase/firebase"



export const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [spinner, setSpinner] = useState(true);
    
    
    const {categoryid} = useParams();
    

    
    useEffect( () => {
      
      const db= getFirestore(app)

      const q = query(
        collection(db, "productos"),
        where("category", "==", `${categoryid}`)
      );

      
      const itemsCollection = collection(db, "productos");
      getDocs(categoryid? q : itemsCollection).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay resultados");
        }  
        setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));
        setSpinner(false)
      });
  }, [categoryid]);
  
    return (
        <div className="grid">
            <section className="itemlistcontainer">
                    {
                        spinner ? <SpinnerCircular /> : <ItemList products={items}/>
                    }
            </section>
        </div>)
}