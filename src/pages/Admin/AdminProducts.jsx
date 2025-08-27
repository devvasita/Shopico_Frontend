import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../components/ProductMain/ProductCard";
import bgImg from "../../assets/camera.jpg";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const ProductMain = () => {
  const handleDeleteProduct = (e, id) => {
    e.stopPropgation();
    console.log("delete clicked", e, id);
  };

  return (
    <Container sx={{ my: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{ fontWeight: "bold", color: "text.secondary" }}
      >
        <Inventory2OutlinedIcon
          fontSize="large"
          sx={{ verticalAlign: "middle", mr: 1 }}
        />
        Products
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item size={{ xs: 12, sm: 4 }} key={index}>
            <ProductCard
              OnDelete={handleDeleteProduct}
              id={index + 1}
              image={bgImg}
              title={"bag"}
              price={500}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductMain;
