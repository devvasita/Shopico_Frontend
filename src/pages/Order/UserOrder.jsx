import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import shoesImg from "../../assets/shoes.png";

const dummyUserOrderData = [
  {
    _id: "ORDER-12345",
    address: "123 Main St, Anytown, USA 12345",
    orderstatus: "Delivered",
    orderItems: [
      {
        productDetails: {
          productimage: shoesImg,
          productname: "Fancy T-Shirt",
          discount: 10,
          price: 500,
        },
        quantity: 1,
      },
      {
        productDetails: {
          productimage: shoesImg,
          productname: "Bluetooth Headphones",
          discount: 5,
          price: 1500,
        },
        quantity: 1,
      },
    ],
  },
  {
    _id: "ORDER-67890",
    address: "456 Oak Ave, Somewhere, USA 67890",
    orderstatus: "Shipped",
    orderItems: [
      {
        productDetails: {
          productimage: shoesImg,
          productname: "Stylish Watch",
          discount: 15,
          price: 2500,
        },
        quantity: 1,
      },
    ],
  },
  {
    _id: "ORDER-11223",
    address: "789 Pine Ln, Nowhere, USA 11223",
    orderstatus: "Processing",
    orderItems: [
      {
        productDetails: {
          productimage: shoesImg,
          productname: "Leather Wallet",
          discount: 0,
          price: 300,
        },
        quantity: 2,
      },
    ],
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "success";
    case "Shipped":
      return "info";
    case "Processing":
      return "warning";
    default:
      return "default";
  }
};

const UserOrders = () => {
  // Use a dummy state for demonstration purposes
  const userOrderData = dummyUserOrderData;

  useEffect(() => {
    // In a real application, you'd dispatch the action here
    // dispatch(userorders());
  }, []);

  return (
    <Container sx={{ my: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{ fontWeight: "bold", color: "text.secondary" }}
      >
        <ShoppingBagOutlinedIcon
          fontSize="large"
          sx={{ verticalAlign: "middle", mr: 1 }}
        />
        Your Orders
      </Typography>
      <Divider sx={{ mb: 4 }} />

      {userOrderData?.length > 0 ? (
        <Stack spacing={4}>
          {userOrderData.map((order) => (
            <Card key={order._id} sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "medium" }}
                  >
                    Order ID:{" "}
                    <Box component="span" sx={{ color: "text.secondary" }}>
                      {order._id}
                    </Box>
                  </Typography>
                  <Chip
                    label={order.orderstatus}
                    color={getStatusColor(order.orderstatus)}
                    variant="filled"
                    size="small"
                  />
                </Box>
                <Divider sx={{ my: 2 }} />

                <Stack spacing={3}>
                  {order.orderItems.map((item, itemIndex) => (
                    <Grid
                      container
                      spacing={2}
                      alignItems="center"
                      key={itemIndex}
                    >
                      <Grid size={{ xs: 12, sm: 3 }}>
                        <Box
                          component="img"
                          sx={{
                            width: 200,
                            height: 200,
                            objectFit: "contain",
                            borderRadius: 3,
                          }}
                          src={item.productDetails.productimage}
                          alt={item.productDetails.productname}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 9 }}>
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {item.productDetails.productname}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Box
                              component="span"
                              sx={{ fontWeight: "bold", color: "text.primary" }}
                            >
                              Price:
                            </Box>{" "}
                            ₹{item.productDetails.price}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Box
                              component="span"
                              sx={{ fontWeight: "bold", color: "text.primary" }}
                            >
                              Quantity:
                            </Box>{" "}
                            {item.quantity}
                          </Typography>
                          {item.productDetails.discount > 0 && (
                            <Typography variant="body2" color="text.secondary">
                              <Box
                                component="span"
                                sx={{
                                  fontWeight: "bold",
                                  color: "text.primary",
                                }}
                              >
                                Discount:
                              </Box>{" "}
                              {item.productDetails.discount}%
                            </Typography>
                          )}
                          <Typography variant="body2" color="text.secondary">
                            <Box
                              component="span"
                              sx={{ fontWeight: "bold", color: "text.primary" }}
                            >
                              Delivery Address:
                            </Box>{" "}
                            {order.address}
                          </Typography>
                          <Box mt={1} sx={{ textAlign: "right" }}>
                            <Typography
                              variant="h6"
                              component="span"
                              sx={{ fontWeight: "bold", color: "primary.main" }}
                            >
                              Total: ₹
                              {item.productDetails.price * item.quantity}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : (
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h5" color="text.secondary">
            No orders found.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default UserOrders;
