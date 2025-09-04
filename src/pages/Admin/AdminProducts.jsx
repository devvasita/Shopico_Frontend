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
import {
  DeleteProduct,
  GetAllProducts,
} from "../../redux/slice/ProductSlice/ProductSlice";
import { useToast } from "../../components/common/ToastProvider";
import CustomModal from "../../components/common/CustomModal";
import { Delete } from "@mui/icons-material";

const ProductMain = () => {
  const {
    products: { getAllProducts: allProdcuts },
    deleteProduct,
  } = useSelector((state) => state.Product);
  const dispatch = useDispatch();
  const toast = useToast();

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  // for delete Modal
  const handleDeleteModalOpen = () => setDeleteModal(true);
  const handleDeleteModalClose = () => {
    setDeleteModal(false);
    setProductIdToDelete(null);
  };

  // to get all products
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

  const handleDeleteProduct = async () => {
    console.log(productIdToDelete, "PRODUCT");

    try {
      await dispatch(DeleteProduct(productIdToDelete)).unwrap();
      handleDeleteModalClose();
      toast("Product deleted Sucessfully", "success");
    } catch (error) {
      toast(error, "error");
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getAllProduct();
  }, [page, deleteProduct]);

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
                OnDelete={() => {
                  handleDeleteModalOpen();
                  setProductIdToDelete(product?._id);
                }}
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

      <CustomModal
        handleCloseAction={handleDeleteModalClose}
        isModalOpen={deleteModal}
        handleSubmitBtn={handleDeleteProduct}
        icon={<Delete sx={{ color: "error.main", fontSize: 35 }} />}
        modalColor={"error"}
        modalTitle={"Are You Sure ?"}
        modalSubTitle={"Do you really want to delete this Product?"}
        submitBtnText={"Delete"}
        key={"DeleteModal"}
      />
    </Container>
  );
};

export default ProductMain;
