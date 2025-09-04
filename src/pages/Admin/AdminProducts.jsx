import {
  Container,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductMain/ProductCard";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from "../../redux/slice/ProductSlice/ProductSlice";
import { useToast } from "../../components/common/ToastProvider";

const ProductMain = () => {
  const {
    products: { getAllProducts: allProdcuts },
  } = useSelector((state) => state.Product);
  const dispatch = useDispatch();
  const toast = useToast();

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const getAllProduct = async () => {
    const apidData = {
      page: page,
      category: "all",
    };
    try {
      const response = await dispatch(GetAllProducts(apidData)).unwrap();
      setPageCount(response?.Pagination?.pageCount);
    } catch (error) {
      toast(error, "error");
    }
  };
  const handleDeleteProduct = (e, id) => {
    e.stopPropgation();
    console.log("delete clicked", e, id);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getAllProduct();
  }, [page]);

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
        {allProdcuts && allProdcuts.length > 0 ? (
          allProdcuts?.map((product) => (
            <Grid item size={{ xs: 12, sm: 4 }} key={product?._id}>
              <ProductCard
                OnDelete={handleDeleteProduct}
                id={product?._id}
                image={product?.productImage}
                title={product?.productName}
                price={product?.price}
              />
            </Grid>
          ))
        ) : (
          <Typography>No Products Found</Typography>
        )}
      </Grid>

      <Stack my={3} direction={"row"} justifyContent={"center"}>
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Stack>
    </Container>
  );
};

export default ProductMain;
