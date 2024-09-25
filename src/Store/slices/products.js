import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productAction = createAsyncThunk("product/getAll", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

export const productDetailsAction = createAsyncThunk(
  "product/getById",
  async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], productById: null },

  extraReducers: (builder) => {
    builder
      .addCase(productAction.pending, (state) => {
        state.products = [];
      })
      .addCase(productAction.fulfilled, (state, action) => {
        state.products = action.payload;
      });

    builder.addCase(productDetailsAction.fulfilled, (state, action) => {
      state.productById = action.payload;
    });
  },
});
export default productsSlice.reducer;
