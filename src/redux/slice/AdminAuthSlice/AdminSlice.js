import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminLoginApi } from "../../../api/adminApis/Adminapi";

export const AdminLoginAuth = createAsyncThunk("admin/login", async (data) => {
  try {
    const response = await AdminLoginApi(data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    adminLogin: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(AdminLoginAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminLoginAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.adminLogin = action.payload;
      })
      .addCase(AdminLoginAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default AdminSlice.reducer;
