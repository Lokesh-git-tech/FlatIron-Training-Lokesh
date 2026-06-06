import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: "$999",
      inStock: true,
    },
    {
      id: 2,
      name: "Phone",
      price: "$699",
      inStock: false,
    },
    {
      id: 3,
      name: "Tablet",
      price: "$499",
      inStock: true,
    },
  ]);

  const [showInStock, setShowInStock] = useState(false);

  const removeProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  return (
    <>
      <h1>Product Dashboard</h1>

      <ProductList
        products={products}
        showInStock={showInStock}
        setShowInStock={setShowInStock}
        onRemove={removeProduct}
      />
    </>
  );
}

export default App;