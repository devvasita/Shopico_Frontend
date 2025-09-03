import React, { lazy } from "react";
import Layout from "../layout/Layout";

// Lazy imports neeche rakho readability ke liye
const Home = lazy(() => import("../pages/Home/Home"));
const Products = lazy(() => import("../pages/Products/Products"));
const ProductsDetails = lazy(() => import("../pages/Products/ProductsDetails"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const ForgotPassword = lazy(() =>
  import("../pages/ForgotPassword/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("../pages/ResetPassword/ResetPassWord")
);

const Shipping = lazy(() => import("../pages/Shipping/Shipping"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout"));
const UserOrders = lazy(() => import("../pages/Order/UserOrder"));

// admin
const AdminLayout = lazy(() =>
  import("../components/AdminCommonLayout/AdminSidebar")
);

const AdminLogin = lazy(() => import("../pages/Admin/AdminLogin"));

const AdminDashboard = lazy(() => import("../pages/Admin/AdminDashboard"));

const AdminProducts = lazy(() => import("../pages/Admin/AdminProducts"));

const AdminCategory = lazy(() => import("../pages/Admin/AdminCategory"));

const AdminAddProducts = lazy(() => import("../pages/Admin/AdminAddProduct"));

const AdminOrders = lazy(() => import("../pages/Admin/AdminOrdersTable"));

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductsDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "resetPassword/:id/:token",
        element: <ResetPassword />,
      },
      {
        path: "shipping",
        element: <Shipping />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order",
        element: <UserOrders />,
      },
      {
        path: "admin/login",
        element: <AdminLogin />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "addCategory",
        element: <AdminCategory />,
      },
      {
        path: "addProducts",
        element: <AdminAddProducts />,
      },
      {
        path: "orders",
        element: <AdminOrders />,
      },
    ],
  },
];
