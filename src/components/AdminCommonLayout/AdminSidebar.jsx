import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  InputBase,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

// Dummy data for design purposes
const dummyAdminData = {
  name: "Admin User",
  profile: "https://via.placeholder.com/150",
};

const drawerWidth = 240;

const navLinks = [
  { text: "Dashboard", path: "/admin/dashboard", icon: <DashboardIcon /> },
  { text: "Add Products", path: "/admin/addProducts", icon: <AddBoxIcon /> },
  { text: "Add Category", path: "/admin/addcategory", icon: <CategoryIcon /> },
  { text: "Products", path: "/admin/products", icon: <InventoryIcon /> },
  { text: "Orders", path: "/admin/orders", icon: <ShoppingBagIcon /> },
  { text: "Settings", path: "/admin/settings", icon: <SettingsIcon /> },
];

const AdminSidebar = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // This is a placeholder for the actual logout logic
    console.log("Logging out...");
    handleClose();
    // In a real app, you would dispatch the logout action here
    // dispatch(AdminLogout()).then(() => navigate('/admin/login'));
  };

  const drawer = (
    <Box>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {dummyAdminData.name} Admin
        </Typography>
      </Toolbar>

      <Divider />

      <List>
        {navLinks.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            component={NavLink}
            to={item.path}
            sx={{
              "&.active .MuiListItemButton-root": {
                backgroundColor: "primary.light",
                fontWeight: "bold",
                "& .MuiListItemIcon-root": {
                  color: "primary.contrastText",
                },
              },
              "& .MuiListItemButton-root": {
                borderRadius: 2,
                margin: "8px 16px",
                padding: "12px 16px",
              },
              color: "primary.contrastText",
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "primary.main",
          boxShadow: "none",
          borderBottom: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              Shop
              <Box
                component="span"
                sx={{
                  color: "#17e2d1",
                }}
              >
                ico
              </Box>
            </Typography>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              position: "relative",
              borderRadius: (theme) => theme.shape.borderRadius,
              backgroundColor: (theme) =>
                alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: (theme) =>
                  alpha(theme.palette.common.white, 0.25),
              },
              marginRight: 2,
              marginLeft: 0,
              width: "100%",
              "@media (min-width: 600px)": {
                marginLeft: 3,
                width: "auto",
              },
            }}
          >
            <Box
              sx={{
                padding: (theme) => theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              sx={{
                color: "inherit",
                "& .MuiInputBase-input": {
                  padding: (theme) => theme.spacing(1, 1, 1, 0),
                  paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)})`,
                  transition: (theme) => theme.transitions.create("width"),
                  width: "100%",
                  "@media (min-width: 960px)": {
                    width: "20ch",
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{ mr: 1, display: { xs: "none", sm: "block" } }}
            >
              {dummyAdminData.name}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {dummyAdminData.profile ? (
                <Avatar
                  alt={dummyAdminData.name}
                  src={dummyAdminData.profile}
                />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 100,
                horizontal: -95,
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="admin sidebar"
      >
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "primary.main",
              //   color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* {children} */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminSidebar;
