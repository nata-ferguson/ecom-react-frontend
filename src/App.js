import "./App.css";
import ProductList from "./ProductList";
import products from "./productsData";

function App() {
  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
