import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { baseUrl } from "./../../services/constant";

export interface ProductData {
  id: string;
  title: string;
  image_url: string;
  price: number;
  count: number;
  totalPrice: number;
  unitPrice: number;
}

let totalAmount = 0;

interface ProductState {
  products?: Array<ProductData>;
  isLoading?: boolean;
  selectedProducts?: Array<ProductData>;
  totalAmount?: number;
  showModal: boolean;
  cartIcon: string;
}

const initialState: ProductState = {
  products: [],
  selectedProducts: [],
  totalAmount: 0,
  showModal: false,
  cartIcon: "",
};

const updatePricing = (firstArray: Array<ProductData>, secondArray: any) => {
  const result = firstArray.map((o) => {
    let obj = secondArray.find((e: any) => e.id === o.id);
    totalAmount = totalAmount + obj?.price;
    return Object.assign(
      {},
      o,
      obj && {
        price: obj.price * o.count,
        unitPrice: obj.price,
        totalPrice: obj.price * o.count,
      }
    );
  });
  return result;
};

const getBasePrice = (data: any, prodId: number) => {
  const obj = data.find((prod: any) => prod.id === prodId);
  return obj;
};

export const fetchProducts = createAsyncThunk(
  "products",
  async ({
    currency,
    searchValue,
  }: {
    currency: string;
    searchValue?: string;
  }) => {
    try {
      const res = await axios({
        url: `${baseUrl}/api/graphql`,
        method: "post",
        data: {
          query: `
        query {
          products {
            id
            title
            image_url
            price(currency: ${currency})
          }
        }
        `,
        },
      });
      const { data } = res.data;
      return {
        data,
        searchValue,
      };
    } catch (error) {
      throw error;
    }
  }
);

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

export const removeProductFromCart = createAsyncThunk(
  "products/removeproducts",
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

export const totalProductPrice = (arr: ProductData[]) => {
  let sum = 0;
  let qty = 0;

  arr.forEach((prod) => {
    sum = sum + prod.totalPrice;
    qty = qty + prod.count;
  });
  return {
    sum,
    qty,
  };
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState as ProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      const newState = Object.assign([], state.selectedProducts);

      const { products } = action.payload.data;
      const searchValue = action.payload.searchValue;
      const updatePricingArr = updatePricing(newState, products);

      const formatSearchValue =
        searchValue && searchValue?.[0].toUpperCase() + searchValue.slice(1);

      const filterProduct = products.filter((i: any) => {
        return i.title.indexOf(formatSearchValue) !== -1;
      });

      state.products = searchValue ? filterProduct : products;
      state.selectedProducts = updatePricingArr;
      state.totalAmount = totalProductPrice(updatePricingArr).sum;
    });

    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const newState: ProductData[] = Object.assign([], state.selectedProducts);
      const { payload } = action;

      if (!newState?.find(({ id }) => id === payload.id)) {
        newState?.push({
          ...payload,
          count: 1,
          totalPrice: payload.price,
          unitPrice: payload.price,
        });
      } else {
        newState.map((item) => {
          if (item.id === payload.id) {
            item.count = item.count + 1;
            item.price = item.price * item.count;
            item.totalPrice = item.unitPrice * item.count;
          }
          return item;
        });
      }

      state.selectedProducts = newState;
      state.totalAmount = totalProductPrice(newState).sum;
    });

    builder.addCase(removeProductFromCart.fulfilled, (state, action) => {
      const newState = Object.assign([], state.selectedProducts);
      const { payload } = action;

      const filterProduct = newState.filter(
        (i: { id: string }) => Number(i.id) !== Number(payload.id)
      );
      state.selectedProducts = filterProduct;
      state.totalAmount = totalProductPrice(filterProduct).sum;
    });

    builder.addCase(incrementProductCount.fulfilled, (state, action) => {
      const newState = Object.assign([], state.selectedProducts);

      const { payload } = action;

      newState.map((item: ProductData) => {
        if (Number(item.id) === payload) {
          item.count = item.count + 1;
          item.price = item.unitPrice * item.count;
          item.totalPrice = item.unitPrice * item.count;
        }
        return item;
      });
      state.totalAmount = totalProductPrice(newState).sum;
    });
    builder.addCase(decrementProductCount.fulfilled, (state, action) => {
      const newState = Object.assign([], state.selectedProducts);

      const { payload } = action;

      newState.map((item: ProductData) => {
        if (Number(item.id) === payload) {
          item.count = item.count - 1;
          item.price = item.price - item.unitPrice;
          item.totalPrice = item.totalPrice - item.unitPrice;
        }
        return item;
      });

      const baseCount = getBasePrice(newState, payload);
      if (baseCount.count === 0) {
        state.selectedProducts = newState?.filter(
          (prod: any) => prod.id !== payload
        );
      }
      state.totalAmount = totalProductPrice(newState).sum;
    });
  },
});

export default productSlice.reducer;
