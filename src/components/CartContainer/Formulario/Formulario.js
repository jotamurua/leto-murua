import React from "react";
import { useState, useContext } from "react";
import { Formik, Form, Field} from "formik";
import { doc, addDoc, collection, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { CartContext } from "../../CartContext/CartContext";

export const Formulario = ({total}) => {
    const {cart } = useContext(CartContext);
    const [orderId, setOrderId] = useState ();

    const sendOrder = (datos) => {
        const order = { 
            buyer: datos,
            items: cart,
            total: total
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "pedidos");

        addDoc(ordersCollection, order).then(({id}) => setOrderId(id)).catch(console.log("La orden no se ha podido procesar"));
    }
        
        const actualizarStock = (item) => {
            const db = getFirestore();
            const stockDoc =  doc(db, "productos", `${item.id}`);
            updateDoc(stockDoc, {stock: 777})
        }
        const EnviarPedido = (datos) => {
            const order = { 
                buyer: datos,
                items: cart,
                total: total
            };
            const db= getFirestore();
            const batch = writeBatch(db);
            const ordersCollection = collection(db, "pedidos");
            const productsCollection = collection(db, "productos", "HM5dRP9UT74sTcpF5AHx");

            batch.set(ordersCollection, {order});
            batch.update (productsCollection, {stock: 888});
            batch.commit ();
            
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

             <button type="submit">Enviar</button>
             {orderId && <h1>Gracias Por tu compra! Tu id es {orderId}</h1>}
    </Form>)}
   
    </Formik>
    </>
    )
}