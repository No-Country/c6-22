import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart_tecnoStore", JSON.stringify(state));
    },
    deleteProduct: (state, action) => {
      const filter = state.filter((el, i) => i !== action.payload);

      localStorage.setItem("cart_tecnoStore", JSON.stringify(filter));
      return filter;
    },
    getProducts: (state) => {
      const products = localStorage.getItem("cart_tecnoStore");

      return JSON.parse(products);
    },
    clearProducts: () => {
      localStorage.removeItem("cart_tecnoStore");
      return [];
    },
  },
});

export default cartSlice.reducer;

export const { addProduct, deleteProduct, getProducts } = cartSlice.actions;
