import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import products from "./productsData";

function App() {
  //define the shopping cart state
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      {/* products data passed down to productList component as a prop products */}
      <ProductList products={products} addToCart={addToCart} />
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
