import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminLoginApi } from "../../../api/adminApis/Adminapi";

export const AdminLoginAuth = createAsyncThunk(
  "admin/login",
  async (data, thunkApi) => {
    console.log(data, "DATA");

    try {
      const response = await AdminLoginApi(data);

      if (response.status == 200) {
        localStorage.setItem("admintoken", response.data.token);
        return response.data;
      } else {
        return thunkApi.rejectWithValue(
          response.response.data.error || "Login Failed"
        );
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

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
