import React from "react";
import "./Product.css";

export default function Product(props) {
  const handleAddToCart = () => {
    props.addToCart(props.product);
  };
  return (
    <div className="product-card">
      <img src={props.product.imageUrl} alt={props.product.name} />
      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
