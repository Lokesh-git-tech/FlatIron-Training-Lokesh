import styles from "../styles/ProductCard.module.css";
import { Card, CardContent, Typography, Button } from "@mui/material";

function ProductCard(props) {
  return (
    <Card className={styles.card}>
      <CardContent
        className={
          !props.product.inStock
            ? "outOfStockClass"
            : ""
        }
      >
        <Typography variant="h6">
          {props.product.name}
        </Typography>

        <Typography>
          Price: {props.product.price}
        </Typography>

        <Typography>
          {props.product.inStock ? "In Stock" : "Out of Stock"}
        </Typography>

        <Button
          variant="outlined"
          onClick={() => props.onRemove(props.product.id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;