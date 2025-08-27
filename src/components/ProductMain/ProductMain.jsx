import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import bgImg from "../../assets/camera.jpg";
import CustomSelect from "../common/CustomSelect";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const ProductMain = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // to dispatch card on click
  const handleBuyProduct = (id) => {
    console.log(id, "ID get from card");
  };

  return (
    <Container sx={{ my: 4 }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
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

        <CustomSelect
          value={age}
          onChange={handleChange}
          options={[
            { value: "", label: "All" },
            { value: 10, label: "Ten" },
            { value: 20, label: "Twenty" },
            { value: 30, label: "Thirty" },
          ]}
        />
      </Stack>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item size={{ xs: 12, sm: 3 }} key={index}>
            <ProductCard
              OnBuyProduct={handleBuyProduct}
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
