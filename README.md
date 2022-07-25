# Bienvenida/o a mi tienda ficticia LETO BREW LAB

Soy Joel Murúa, estudiante de programación Fullstack en Argentina Programa con orientación de Front End en Angular y también estudié React.js en Coderhouse.

En esta web utilicé, entre otras, las siguientes funciones: 
- Conexión a una base de datos en Firebase que almacena todos los productos disponibles con todos sus datos (descripción, precio, stock disponible, etc.), así como también todos los pedidos que se realicen en la web en tiempo real con datos del cliente, items seleccionados, total y fecha de la compra.
- Automaticamente al realizarse una compra se actualiza el stock de los productos. Si un producto es quitado o agregado de la lista esto se impacta automaticamente en la web.
- Cuenta con un diseño responsive en cualquier dispositivo.
- Selección de categorias de productos si desea ver café en grano, elaboraciones, o el detalle ampliado de un simple item utilizando querys de la base de datos en lugar de metodos de javascript para optimizar el funcionamiento. (para que la base de datos pueda interpretar la petición se utilizó el hook de react "useParams").
- Spinners que se activan y se desactivan automaticamente mientras la web carga para indicarle al usuario que debe esperar.
- Carrito que almacena todas las compras mediante el hook de React "useContext", este carrito solo aparece cuando un item ha sido agregado al mismo.
- Contadores que nunca exceden el stock del producto.

Acá te dejo el link con el deploy de la web:
[LETO BREW LAB](https://letobrewlab.netlify.app/)

Si queres compilar por vos misma/o este proyecto podes hacerlo siguiendo estos pasos:
 -clonar el repositorio desde github:
 podes hacerlo manualmente o desde simbolo de sistema una vez dentro del directorio deseado con el siguiente codigo
 `git clone https://github.com/jotamurua/leto-murua.git`
-ejecutar los siguientes comandos desde el directorio de simbolo de sistema o la terminal del editor de codigo que estes usando:
`npm i`

`npm start`

Muchas gracias por leerme, aquí debajo te dejo mis contactos.
Un saludo!
Joel

*joel.l.murua@gmail.com*
[Linkedin](https://www.linkedin.com/in/joelmurua/)
[mi portfolio](https://portfoliomurua.netlify.app/)