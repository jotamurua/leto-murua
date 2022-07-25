import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./CartConfirm.css";

export const CartConfirm = () => {
  const { orderId, setId } = useContext(CartContext);

  return (
    <section>
      <article className="articulo-confirm">
        <div className="imagen-confirm">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/murua-leto.appspot.com/o/Introducci%C3%B3n%20(1).png?alt=media&token=5699a058-0cd9-4c6b-8dd3-08a02b56370e"
            alt="cafe confirmación de compra"
          />
        </div>
        <div className="contenido-confirm">
          <h1>¡Muchas gracias por tu compra!</h1>
          <h5>el ID de tu pedido es {orderId}</h5>
          <Link
            to="/"
            onClick={() => {
              setId();
            }}
            className="link-component"
          >
            {" "}
            Volver a la tienda.
          </Link>
        </div>
      </article>
    </section>
  );
};
