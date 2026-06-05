import styles from "../styles/ProductCard.module.css";
import { Card, CardContent, Typography } from "@mui/material";

function ProductCard(props) {
  return (
    <Card
      className={`${styles.card} ${
        !props.product.inStock ? styles.outOfStock : ""
      }`}
    >
      <CardContent>
        <Typography variant="h6">
          {props.product.name}
        </Typography>

        <Typography>
          Price: ${props.product.price}
        </Typography>

        <Typography>
          {props.product.inStock ? "In Stock" : "Out of Stock"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;