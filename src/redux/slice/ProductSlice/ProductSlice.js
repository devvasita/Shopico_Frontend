import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddProductApi,
  AdminAddCategoryApi,
  GetAllProductsApi,
  GetCategoryApi,
} from "../../../api/ProductApis/ProductApi";

// to logout admin
export const AdminAddCategory = createAsyncThunk(
  "product/addCategory",
  async (data, thunkApi) => {
    try {
      const response = await AdminAddCategoryApi(data);

      if (response.status == 200) {
        return response.data;
      } else {
        return thunkApi.rejectWithValue(response.response.data.error);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// get category
export const GetCategory = createAsyncThunk(
  "product/getCategory",
  async (data, thunkApi) => {
    try {
      const response = await GetCategoryApi();

      if (response.status == 200) {
        return response.data;
      } else {
        return thunkApi.rejectWithValue(response.response.data.error);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// get category
export const AddProduct = createAsyncThunk(
  "product/addProduct",
  async (data, thunkApi) => {
    try {
      const response = await AddProductApi(data);

      if (response.status == 200) {
        return response.data;
      } else {
        return thunkApi.rejectWithValue(response.response.data.error);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// get all products
export const GetAllProducts = createAsyncThunk(
  "product/getAllProduct",
  async (data, thunkApi) => {
    try {
      const response = await GetAllProductsApi(data);

      if (response.status == 200) {
        return response.data;
      } else {
        return thunkApi.rejectWithValue(response.response.data.error);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    addCategoryData: [],
    categoryList: [],
    products: [],
    addProducts: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // for adminadd category
    builder
      .addCase(AdminAddCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminAddCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.addCategoryData = action.payload;
      })
      .addCase(AdminAddCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //  get category
      .addCase(GetCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryList = action.payload;
      })
      .addCase(GetCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // add products
      .addCase(AddProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.addProducts = action.payload;
      })
      .addCase(AddProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get all products
      .addCase(GetAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(GetAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ProductSlice.reducer;
