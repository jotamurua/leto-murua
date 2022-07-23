import React from "react";
import {  useContext } from "react";
import { Formik, Form, Field} from "formik";
import { doc, addDoc, collection, getFirestore, updateDoc } from "firebase/firestore"
import { CartContext } from "../../CartContext/CartContext";
import { app } from "../../../firebase/firebase.js";
import { Link } from "react-router-dom";

export const Formulario = ({total}) => {
    const {cart, setId, clear } = useContext(CartContext);
    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    

    const sendOrder = (datos) => {
        const order = { 
            buyer: datos,
            items: cart,
            date: output,
            total: total
            
        };
        const db = getFirestore(app);
        const ordersCollection = collection(db, "pedidos");

        addDoc(ordersCollection, order).then(({id}) => setId(id)).catch((err) => setId(false)).finally({clear});
    }
        
        const actualizarStock = (item) => {
            const db = getFirestore(app);
            const stockDoc =  doc(db, "productos", `${item.id}`);
            updateDoc(stockDoc, {stock: item.stock - item.quantity})
        }
              
    return (
    <>
    <Formik
    initialValues={{
        name: '',
        email: '',
        phone: ''
    }}
    validate={(datos) => {
        let alertas = {};

        if(!datos.name){
            alertas.name = "Necesitamos que ingreses un nombre"
        }

        if(!datos.email){
            alertas.email = "Necesitamos que ingreses un correo"
        }

        if(!datos.phone){
            alertas.phone = "Necesitamos que ingreses un telefono"
        }

        return alertas
    }}
    onSubmit={(datos, {resetForm}) => {
        sendOrder(datos)
        cart.map (item => actualizarStock(item))
        resetForm()
        setTimeout(() => {clear()
            
        }, 1000); 
    }}> 
    {({ errors}) => ( 
    <Form  >
        <div>
             <label htmlFor="nombre">Nombre y Apellido</label>
              <Field
            type="text" 
            id="name" 
            name="name" 
            placeholder="Ingrese Aqui su nombre"
            />
            {errors.name && <h1>{errors.name}</h1>}
        </div>
        <div>
             <label htmlFor="correo">Correo</label>
        <Field
            type="email" 
            id="email" 
            name="email" 
            placeholder="Ingrese Aqui su correo"

            />
            {errors.email && <h1>{errors.email}</h1>}
        </div>
        <div>
             <label htmlFor="telefono">Telefono</label>
        <Field
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Ingrese Aqui su telefono"

            />
            {errors.phone && <h1>{errors.phone}</h1>}
        </div>

             <Link to='/finish'><button type="submit">Finalizar Compra</button></Link>
             
    </Form>)}
   
    </Formik>
    </>
    )
}