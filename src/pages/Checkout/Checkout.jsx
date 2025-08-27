import React from "react";
import dayjs from "dayjs";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Stack,
  Avatar,
  Paper,
  Container,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

const Checkout = () => {
  // Dummy data
  const dummyState = {
    address: "123 Main Street",
    city: "Somecity",
    state: "Somestate",
    country: "Somecountry",
    mobile: "1234567890",
    pincode: "123456",
    shippingPrice: 50,
    totalPrice: 1500,
  };

  const dummyUserCartData = [
    {
      productDetails: {
        productimage: "https://via.placeholder.com/150",
        productname: "Stylish T-Shirt",
        discount: 10,
        price: 500,
      },
      quantity: 2,
    },
    {
      productDetails: {
        productimage: "https://via.placeholder.com/150",
        productname: "Cool Sneakers",
        discount: 5,
        price: 400,
      },
      quantity: 1,
    },
    {
      productDetails: {
        productimage: "https://via.placeholder.com/150",
        productname: "Dummy Product 3",
        discount: 5,
        price: 400,
      },
      quantity: 1,
    },
  ];

  const { state } = { state: dummyState };
  const { userCartData } = { userCartData: dummyUserCartData };
  const dateAfter2days = dayjs().add(2, "day").format("MMMM D, YYYY");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proceeding to payment with dummy data:", {
      ...state,
      orderItems: userCartData,
    });
  };

  return (
    <Container sx={{ my: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{ fontWeight: "bold", color: "text.secondary" }}
      >
        <ShoppingCartCheckoutOutlinedIcon
          fontSize="large"
          sx={{ verticalAlign: "middle", mr: 1 }}
        />
        Checkout
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Paper
        elevation={2}
        sx={{
          width: "100%",
          p: { xs: 2, md: 4 },
          borderRadius: 2,
        }}
      >
        <Grid container spacing={4}>
          {/* Shipping Details */}
          <Grid size={{ xs: 12, sm: 5 }}>
            <Card variant="outlined" sx={{ minHeight: "100%" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  Shipping Details
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <HomeIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      <Typography component="span" fontWeight="bold">
                        Address:
                      </Typography>{" "}
                      {state?.address}, {state?.city}, {state?.state},{" "}
                      {state?.country} - {state?.pincode}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      <Typography component="span" fontWeight="bold">
                        Mobile:
                      </Typography>{" "}
                      {state?.mobile}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocalShippingIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      <Typography component="span" fontWeight="bold">
                        Shipping Price:
                      </Typography>{" "}
                      {state?.shippingPrice} ₹
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      mt: 3,
                      p: 2,
                      bgcolor: "primary.main",
                      borderRadius: 1,
                    }}
                  >
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography
                          variant="h5"
                          color="primary.contrastText"
                          fontWeight="bold"
                        >
                          Total Price :
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h5"
                          color="primary.contrastText"
                          fontWeight="bold"
                        >
                          {state?.totalPrice} ₹
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Your Orders */}
          <Grid size={{ xs: 12, sm: 7 }}>
            <Card variant="outlined" sx={{ minHeight: "100%" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  Your Orders
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Stack
                  spacing={2}
                  sx={{ maxHeight: "70vh", overflowY: "auto", pr: 2 }}
                >
                  {userCartData?.map((element, index) => (
                    <Box key={index}>
                      <Grid container spacing={2} alignItems={"center"}>
                        <Grid item size={{ xs: 12, sm: 4 }}>
                          <Avatar
                            src={element.productDetails?.productimage}
                            variant="rounded"
                            sx={{
                              height: 150,
                              width: 150,
                              objectFit: "contain",
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {element.productDetails?.productname}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Typography component="span" fontWeight="bold">
                              Quantity:
                            </Typography>{" "}
                            {element.quantity}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Typography component="span" fontWeight="bold">
                              Price:
                            </Typography>{" "}
                            {element.productDetails?.price} ₹
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Typography component="span" fontWeight="bold">
                              Discount:
                            </Typography>{" "}
                            {element.productDetails?.discount}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Typography component="span" fontWeight="bold">
                              Delivery:
                            </Typography>{" "}
                            {dateAfter2days}
                          </Typography>
                          <Typography
                            variant="h6"
                            color="primary"
                            sx={{ mt: 1 }}
                          >
                            Total:{" "}
                            {(
                              element.productDetails?.price * element?.quantity
                            ).toFixed(2)}{" "}
                            ₹
                          </Typography>
                        </Grid>
                      </Grid>
                      {index < userCartData.length - 1 && (
                        <Divider sx={{ mt: 2 }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Process to Payment Button */}
        <Box sx={{ mt: 4 }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
              bgcolor: "primary.main",
              boxShadow: 3,
            }}
          >
            Process to Payment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Checkout;
