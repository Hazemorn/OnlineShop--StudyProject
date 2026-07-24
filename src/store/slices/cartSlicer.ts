import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  size: number;
  rate: number;
  sex: string;
  color: string;
  imageUrl: string;
  count: number;
}

export interface InitState {
  totalPrice: number;
  items: CartItem[];
  totalCount: number;
}

const initCart: InitState = {
  totalPrice: 0,
  items: [],
  totalCount: 0,
};

const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const calcTotalCount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initCart,
  reducers: {
    // addItem (state, action) {
    //     state.items.push(action.payload);
    //     state.totalPrice = state.items.reduce((sum, obj) => {return obj.price +  sum}, 0)
    // },
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.size === action.payload.size
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: action.payload.count,
        });
      }
      state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action) {
        const findItem = state.items.find(
          obj => obj.id === action.payload.id && obj.size === action.payload.size
      );
      if (findItem) {
            if (findItem.count > 1) {
                findItem.count--;
            }
        }
    state.totalPrice = calcTotalPrice(state.items);
    state.totalCount = calcTotalCount(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (obj) =>
          !(obj.id === action.payload.id && obj.size === action.payload.size)
      );
      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);

    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
