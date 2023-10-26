import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <div className="product-list">
      {props.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
