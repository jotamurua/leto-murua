import React from "react";
import { useState } from "react";
import { Formik, Form, Field} from "formik";
export const Formulario = () => {
  
    const [enviado, setEnviado] = useState (false)
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

        return alertas
    }}
    onSubmit={(datos) => {
        console.log(datos)
        console.log("form enviado")
        setEnviado(true);
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
            {errors.email && <h1>{errors.email}</h1>}
        </div>

             <button type="submit">Enviar</button>
             {enviado && <h1>Gracias Por tu compra! Tu id es</h1>}
    </Form>)}
   
    </Formik>
    </>
    )
}