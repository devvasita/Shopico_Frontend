import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "../slice/AdminAuthSlice/AdminSlice";
import ProductSlice from "../slice/ProductSlice/ProductSlice";

export const store = configureStore({
  reducer: {
    Admin: AdminSlice,
    Product: ProductSlice,
  },
});
