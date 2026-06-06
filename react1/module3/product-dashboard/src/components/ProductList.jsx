import ProductCard from "./ProductCard";
import { Button } from "@mui/material";

function ProductList(props) {
  let displayedProducts = props.products;

  if (props.showInStock) {
    displayedProducts = props.products.filter(
      (product) => product.inStock
    );
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={() =>
          props.setShowInStock(!props.showInStock)
        }
      >
        Filter In Stock
      </Button>

      {displayedProducts.length === 0 ? (
        <p>No products in stock.</p>
      ) : (
        displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={props.onRemove}
          />
        ))
      )}
    </>
  );
}

export default ProductList;