import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
  ButtonGroup,
} from "@mui/material";
import ShoesImage from "../../assets/shoes.png";
import { Delete, Favorite } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartsMain = () => {
  const dummyCart = [
    {
      id: 1,
      productDetails: {
        _id: "1",
        productname: "Nike Air Max Shoes",
        productimage: ShoesImage,
        price: 2000,
        discount: 10,
      },
      quantity: 2,
    },
    {
      id: 2,
      productDetails: {
        _id: "2",
        productname: "Adidas Running Shoes",
        productimage: ShoesImage,
        price: 1500,
        discount: 5,
      },
      quantity: 1,
    },
    {
      id: 2,
      productDetails: {
        _id: "2",
        productname: "Adidas Running Shoes",
        productimage: ShoesImage,
        price: 1500,
        discount: 5,
      },
      quantity: 1,
    },
  ];

  const totalPrice = dummyCart.reduce(
    (acc, item) => acc + item.productDetails.price * item.quantity,
    0
  );

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{ fontWeight: "bold", color: "text.secondary" }}
      >
        <ShoppingCartOutlinedIcon
          fontSize="large"
          sx={{ verticalAlign: "middle", mr: 1 }}
        />
        Cart
      </Typography>
      <Divider sx={{ mb: 4 }} />

      {dummyCart.length > 0 ? (
        <Grid container spacing={3} mt={4}>
          {/* Left Part */}
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Cart ({dummyCart.length} Items)
                </Typography>
                <Divider />

                <Box sx={{ maxHeight: 500, overflowY: "auto", pr: 1 }}>
                  {dummyCart.map((item, index) => (
                    <Box key={index} mt={2} pb={2}>
                      <Grid container spacing={2}>
                        {/* Product Image */}
                        <Grid size={{ md: 3, xs: 12 }}>
                          <img
                            src={item.productDetails.productimage}
                            alt={item.productDetails.productname}
                            style={{
                              width: "100%",
                              borderRadius: "8px",
                            }}
                          />
                        </Grid>

                        {/* Product Details */}
                        <Grid size={{ xs: 12, md: 9 }}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Typography variant="h6">
                              {item.productDetails.productname}
                            </Typography>

                            <ButtonGroup
                              variant="outlined"
                              size="small"
                              sx={{
                                "& .MuiButton-root": {
                                  minWidth: "36px",
                                },
                              }}
                            >
                              <Button>−</Button>

                              {/* Middle Quantity Box */}
                              <Typography
                                variant="body1"
                                sx={{
                                  px: 2,
                                  display: "flex",
                                  alignItems: "center",
                                  borderTop: "1px solid",
                                  borderBottom: "1px solid",
                                  borderLeft: "1px solid",
                                  borderColor: "primary.light", // same as MUI outlined border
                                }}
                              >
                                {item.quantity}
                              </Typography>

                              <Button>+</Button>
                            </ButtonGroup>
                          </Box>

                          <Box
                            display="flex"
                            justifyContent="space-between"
                            mt={1}
                          >
                            <Typography color="text.secondary">
                              Discount: {item.productDetails.discount}%
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            mt={1}
                          >
                            <Typography color="text.secondary">
                              Price: ₹{item.productDetails.price}
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            mt={1}
                          >
                            <Typography color="text.secondary">
                              Delivery Date: 2025-08-22
                            </Typography>
                          </Box>

                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            mt={2}
                          >
                            <Box display="flex" gap={1}>
                              <Button
                                variant="contained"
                                color="error"
                                size="small"
                                startIcon={<Delete />}
                              >
                                Remove
                              </Button>
                              <Button
                                variant="outlined"
                                color="secondary"
                                size="small"
                                startIcon={<Favorite />}
                              >
                                Move To Wishlist
                              </Button>
                            </Box>
                            <Typography variant="subtitle1">
                              Total: ₹
                              {item.productDetails.price * item.quantity}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt: 2 }} />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Part */}
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  The Total Amount of
                </Typography>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  mb={2}
                  mt={1}
                >
                  <Typography color="text.secondary">
                    Temporary Amount
                  </Typography>
                  <Typography>₹{totalPrice}</Typography>
                </Box>

                <Divider />

                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Typography variant="body2">
                    The Total Amount Of (Including VAT)
                  </Typography>
                  <Typography fontWeight="bold">₹{totalPrice}</Typography>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3 }}
                >
                  Go To Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Typography align="center" variant="h6" color="text.secondary">
          Your cart is empty 🛒
        </Typography>
      )}
    </Container>
  );
};

export default CartsMain;
