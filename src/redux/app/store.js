import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "../slice/AdminAuthSlice/AdminSlice";

export const store = configureStore({
  reducer: {
    Admin: AdminSlice,
  },
});
