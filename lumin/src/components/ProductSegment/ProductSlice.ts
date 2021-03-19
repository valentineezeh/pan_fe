import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { baseUrl } from "./../../services/constant";

interface ProductData {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

interface ProductState {
  products?: Array<ProductData>;
  isLoading?: boolean;
}

const initialState: Partial<ProductState> = {};

const GET_PRODUCTS = `
  query {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }
`;

export const fetchProducts = createAsyncThunk("products", async () => {
  try {
    const res = await axios({
      url: `${baseUrl}/api/graphql`,
      method: "post",
      data: {
        query: GET_PRODUCTS,
      },
    });
    const { data } = res.data;
    return data;
  } catch (error) {
    throw error;
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: initialState as ProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
