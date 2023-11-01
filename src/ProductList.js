import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  const addToCart = (product) => {
    //update the cart state by adding the selected product
    props.addToCart(product);
  };
  return (
    <div className="product-list">
      {props.products.map((product) => (
        // product={product} is where the individual product object from
        // the array of products is being passed down to each Product component
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
