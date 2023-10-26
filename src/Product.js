import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product-card">
      <img src={props.product.imageUrl} alt={props.product.name} />
      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
