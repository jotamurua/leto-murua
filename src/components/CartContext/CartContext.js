import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState();
  const setId = (id) => {
    setOrderId(id);
  };

  const copyCart = [...cart];
  const itemInCart = (item) => cart.find((itemCart) => itemCart.id === item.id);

  const isInCart = (item) => copyCart.some((product) => product.id === item.id);

  const addItem = (item, quantity) => {
    if (!isInCart(item)) {
      setCart([...copyCart, { ...item, quantity: quantity }]);
    } else {
      itemInCart(item).quantity += quantity;
      setCart([...copyCart]);
    }
  };

  const removeItem = (item) => {
    if (item.quantity >= 2) {
      item.quantity -= 1;
      setCart([...copyCart]);
    } else {
      setCart(copyCart.filter((product) => product.id !== item.id));
    }
  };

  const clear = () => setCart([]);

  const res = cart.reduce((acc, item) => {
    return (acc = acc + item.price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, orderId, addItem, removeItem, clear, setId, res }}
    >
      {children}
    </CartContext.Provider>
  );
};
