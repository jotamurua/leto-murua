import "./ErrorUrl.css";
import { Link } from "react-router-dom";

const ErrorUrl = () => {
  return (
    <section className="container-error">
      <div className="imagen-error">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/murua-leto.appspot.com/o/Introducci%C3%B3n%20(2).png?alt=media&token=1b5ad41a-1ada-45c2-8e79-95e6669f1f00"
          alt="cafe con error 404"
        />
      </div>
      <div className="texto-error">
        <h1>¿A dónde vas? Esto no existe</h1>
        <Link to="/" className="link-component">
          Volver a inicio
        </Link>
      </div>
    </section>
  );
};

export default ErrorUrl;
