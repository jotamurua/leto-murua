import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { SpinnerCircular } from 'spinners-react';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore} from "firebase/firestore"
import { app } from "../../firebase/firebase"







export const ItemDetailContainer = () => {
 
    const {id} = useParams()
    const [item, setItem] = useState ([])
    const [spinner, setSpinner] = useState(true)

    

    useEffect( () => {

      const db = getFirestore();

      const cafeRef = doc(db, "productos", `${id}`);
      getDoc(cafeRef).then((snapshot) => {
        if (snapshot.exists()) {
          setItem({id: snapshot.id, ...snapshot.data()});
          setSpinner (false);
        }
      });
    }, [id]);

    return (
      
        <div className="grid">
          
            <section className="contenedordetail">
                    {
                        spinner? <SpinnerCircular /> : <ItemDetail product = {item} /> 
                    }
            </section>
        </div>)

}