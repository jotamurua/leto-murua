import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

export const Items = ({ id, img, title, price, stock }) => {
  return (
    <article key={id} className="listcontenedor">
      <img src={img} alt="Foto del café" />
      <h1>{title}</h1>
      <p>${price}</p>
      <Link to={`/item/${id}`}>
        <button className="buttons">¡Ver más!</button>
      </Link>

      <p>Stock disponible: {stock}</p>
    </article>
  );
};
