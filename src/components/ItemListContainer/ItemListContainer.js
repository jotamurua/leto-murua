import React from "react";
import "./ItemListContainer.css"

export const ItemListContainer = (props) => {
    const { text } = props;
    return <h1>{text}</h1>
}