import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AdminLoggedInApi,
  AdminLoginApi,
  AdminLogOutApi,
} from "../../../api/adminApis/Adminapi";

export const AdminLoginAuth = createAsyncThunk(
  "admin/login",
  async (data, thunkApi) => {
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

// to check admin is loggedin or not
export const AdminLoggedIn = createAsyncThunk(
  "admin/loggedIn",
  async (_, thunkApi) => {
    try {
      const response = await AdminLoggedInApi();

      if (response.status == 200) {
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

// to logout admin
export const AdminLogout = createAsyncThunk(
  "admin/logout",
  async (_, thunkApi) => {
    try {
      const response = await AdminLogOutApi();

      if (response.status == 200) {
        localStorage.removeItem("admintoken");
        return response.data;
      } else {
        localStorage.removeItem("admintoken");
        return thunkApi.rejectWithValue(
          response.response.data.error || "Login Failed"
        );
      }
    } catch (error) {
      localStorage.removeItem("admintoken");
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    adminLogin: [],
    adminLoggedInData: [],
    adminLogoutData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // For admin login
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
      })

      // For admin logged in or not
      .addCase(AdminLoggedIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminLoggedIn.fulfilled, (state, action) => {
        state.loading = false;
        state.adminLoggedInData = [action.payload];
      })
      .addCase(AdminLoggedIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //   for admin logout
      .addCase(AdminLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.adminLogoutData = [action.payload];
      })
      .addCase(AdminLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default AdminSlice.reducer;
