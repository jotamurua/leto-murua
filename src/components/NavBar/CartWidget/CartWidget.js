import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { NavLink } from "react-router-dom";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="widget" style={{ opacity: cart.length ? "1" : "0" }}>
      <p className="cart-length">{cart.length}</p>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "currentcategory" : "")}
      >
        <ion-icon
          className="cart-widget"
          name="bag-handle"
          size="large"
        ></ion-icon>
      </NavLink>
    </div>
  );
};
