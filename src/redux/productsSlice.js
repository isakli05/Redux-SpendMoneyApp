import { createSlice } from "@reduxjs/toolkit";
import product from "../products.json";
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: product,
    totalMoney: 100000000000,
    receipt: [],
    receiptTotal: 0,
  },
  reducers: {
    buy: (state, action) => {
      state.totalMoney -= Number(action.payload.price);

      const checkReceipt = state.receipt.find(
        (item) => item.id === action.payload.id
      );

      if (checkReceipt) {
        checkReceipt.amount += 1;
      } else {
        state.receipt.push(action.payload);
      }
    },
    sell: (state, action) => {
      state.totalMoney += Number(action.payload.price);
      const currentBasket = state.receipt.find(
        (item) => item.id === action.payload.id
      );
      const basketWithoutCurrent = state.receipt.filter(
        (item) => item.id !== action.payload.id
      );
      currentBasket.amount -= 1;

      if (currentBasket.amount === 0) {
        state.receipt = basketWithoutCurrent;
      }
    },
    calculateReceiptTotal: (state, action) => {
      state.receiptTotal = action.payload;
    },
    
  },
});

export const receiptSelector = (state) => state.products.receipt;
export const receiptTotalSelector = (state) => state.products.receiptTotal;
export const moneySelector = (state) => state.products.totalMoney;
export const productsSelector = (state) => state.products.items.products;
export const { buy, sell, calculateReceiptTotal } = productsSlice.actions;

export default productsSlice.reducer;
