import React from "react";
import { Items } from "../Items/Items.js";

export const ItemList = ({ products }) => {
  return products.map((product) => <Items key={product.id} {...product} />);
};
