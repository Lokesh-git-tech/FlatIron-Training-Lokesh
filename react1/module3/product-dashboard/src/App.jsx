import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 800,
      inStock: true
    },
    {
      id: 2,
      name: "Phone",
      price: 500,
      inStock: false
    },
    {
      id: 3,
      name: "Headphones",
      price: 100,
      inStock: true
    }
  ];

  const [showInStock, setShowInStock] = useState(false);

  return (
    <>
      <h1>Product Dashboard</h1>

      <ProductList
        products={products}
        showInStock={showInStock}
        setShowInStock={setShowInStock}
      />
    </>
  );
}

export default App;