import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Stack,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AdminuserTable from "./AdminUserTable";

// Dummy data for design purposes
const dashboardData = {
  totalOrders: 157,
  totalProducts: 589,
  totalUsers: 2570,
  totalReturns: 11086,
  topSellingProducts: [
    { name: "Nike Shoes", price: 400, image: "https://via.placeholder.com/50" },
    {
      name: "Adidas T-shirt",
      price: 250,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Samsung A51",
      price: 15000,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Redmi Note 10",
      price: 12500,
      image: "https://via.placeholder.com/50",
    },
    { name: "Laptop Bag", price: 750, image: "https://via.placeholder.com/50" },
  ],
};

// Array of data for the overview cards
const overviewCards = [
  {
    title: " Orders",
    value: dashboardData.totalOrders,
    icon: <ShoppingCartOutlinedIcon fontSize="large" />,
    color: "primary.light",
    trend: "up",
    trendText: "Up from yesterday",
  },
  {
    title: " Products",
    value: dashboardData.totalProducts,
    icon: <Inventory2OutlinedIcon fontSize="large" />,
    color: "secondary.light",
    trend: "up",
    trendText: "Up from yesterday",
  },
  {
    title: "Users",
    value: dashboardData.totalUsers,
    icon: <GroupOutlinedIcon fontSize="large" />,
    color: "primary.main",
    trend: "up",
    trendText: "Up from yesterday",
  },
  {
    title: " Returns",
    value: dashboardData.totalReturns,
    icon: <AutorenewOutlinedIcon fontSize="large" />,
    color: "secondary.main",
    trend: "down",
    trendText: "Down from today",
  },
];

const AdminDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Overview Boxes */}
      <Grid container spacing={2} alignItems={"stretch"}>
        {overviewCards.map((card, index) => (
          <Grid item key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              elevation={3}
              sx={{
                p: 1,
                borderRadius: 2,
                height: "100%",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6" color="text.secondary">
                      {card.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      {card.value}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: card.color, width: 56, height: 56 }}>
                    {React.cloneElement(card.icon, { sx: { color: "white" } })}
                  </Avatar>
                </Stack>
                <Stack direction="row" alignItems="center" mt={1}>
                  {card.trend === "up" ? (
                    <ArrowUpwardIcon sx={{ color: "success.main" }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ color: "error.main" }} />
                  )}
                  <Typography variant="caption" color="text.secondary" ml={0.5}>
                    {card.trendText}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Recent Sales / User Table Section */}
        <Grid size={{ xs: 12 }}>
          <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Sales
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <AdminuserTable data={dashboardData.totalUsers} />
            </CardContent>
          </Card>
        </Grid>

        {/* Top Selling Products Section */}
        <Grid size={{ xs: 12 }}>
          <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Selling Products
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {dashboardData.topSellingProducts.map((product, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Avatar src={product.image} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="body1">
                            {product.name}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", color: "primary.main" }}
                          >
                            ₹{product.price}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
