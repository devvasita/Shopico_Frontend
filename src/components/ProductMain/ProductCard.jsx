import { Delete } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ title, price, OnDelete, OnBuyProduct, image, id }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="green iguana"
          sx={{
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>

          <Typography variant="h6" component="div">
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {OnBuyProduct && (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => OnBuyProduct(id)}
          >
            Buy Now
          </Button>
        )}

        {OnDelete && (
          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={(e) => OnDelete(e, id)}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
