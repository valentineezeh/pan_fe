import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { baseUrl } from "./../../services/constant";

export interface ProductData {
  id: string;
  title: string;
  image_url: string;
  price: number;
  count: number;
}

let totalAmount = 0;

interface ProductState {
  products?: Array<ProductData>;
  isLoading?: boolean;
  selectedProducts?: Array<ProductData>;
  totalAmount?: number;
}

const initialState: ProductState = {
  products: [],
  selectedProducts: [],
  totalAmount: 0,
};

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

const updatePricing = (firstArray: Array<ProductData>, secondArray: any) => {
  const result = firstArray.map((o) => {
    let obj = secondArray.find((e: any) => e.id === o.id);
    totalAmount = totalAmount + obj?.price;
    return Object.assign({}, o, obj && { price: obj.price });
  });
  console.log(`totalAmount`, totalAmount);
  return result;
};

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

export const addProductToCart = createAsyncThunk(
  "products/selectedproducts",
  async (prod: ProductData) => {
    try {
      return prod;
    } catch (error) {
      throw error;
    }
  }
);

export const incrementProductCount = createAsyncThunk(
  "products/incrementproduct",
  async (productId: number) => {
    try {
      return productId;
    } catch (error) {
      throw error;
    }
  }
);

export const decrementProductCount = createAsyncThunk(
  "products/decrementproduct",
  async (productId: number) => {
    try {
      return productId;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductByCurrency = createAsyncThunk(
  "products/currency",
  async (currency: string) => {
    try {
      const res = await axios({
        url: `${baseUrl}/api/graphql`,
        method: "post",
        data: {
          query: `
          query {
            products {
              id
              price(currency: ${currency})
            }
          }
        `,
        },
      });
      // console.log('--->>> ', res.data.data)
      const { data } = res.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
);

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
      state.products = action.payload.products;
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const newState = Object.assign([], state.selectedProducts);
      const { payload } = action;
      if (newState?.length === 0) {
        state.selectedProducts?.push({ ...payload, count: 1 });
      } else {
        if (!newState?.find(({ id }) => id === payload.id)) {
          state.selectedProducts?.push({ ...payload, count: 1 });
        } else {
          newState.map((item: ProductData) => {
            if (item.id === payload.id) {
              item.count = item.count + 1;
            }
            return item;
          });
        }
      }
    });
    builder.addCase(incrementProductCount.fulfilled, (state, action) => {
      const newState = Object.assign([], state.selectedProducts);
      const { payload } = action;
      newState.map((item: ProductData) => {
        if (Number(item.id) === payload) {
          item.count = item.count + 1;
        }
        return item;
      });
    });
    builder.addCase(decrementProductCount.fulfilled, (state, action) => {
      const newState = Object.assign([], state.selectedProducts);
      const { payload } = action;
      newState.map((item: ProductData, index) => {
        if (Number(item.id) === payload) {
          item.count = item.count - 1;
        }
        return item;
      });
    });
    builder.addCase(fetchProductByCurrency.pending, (state, action) => {
      state.totalAmount = 0;
      totalAmount = 0;
    });
    builder.addCase(fetchProductByCurrency.fulfilled, (state, action) => {
      const newState = Object.assign([], state.selectedProducts);
      const { products } = action.payload;
      state.selectedProducts = updatePricing(newState, products);
      state.totalAmount = totalAmount;
    });
  },
});

export default productSlice.reducer;
