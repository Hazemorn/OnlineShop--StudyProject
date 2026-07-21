import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../types/types";
import type { AxiosResponse } from "axios";

interface FilterResponse {
  status: number;
  message: string;
};

interface InitData {
  items: Item[];
  page: number;
  sort: string;
  searchValue: string;
  size: number;
  setSort: string;
  color: string;
  sex: string;
  isLoading: boolean;
  response: FilterResponse;
};

export const initFilter: InitData = {
  items: [],
  page: 1,
  sort: "",
  searchValue: "",
  size: null,
  setSort: "",
  color: null,
  sex: "both",
  isLoading: false, //true
  response: {
    status: 0,
    message: "",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initFilter,
  reducers: {
    fetchFilter(state) {
      state.isLoading = true;
    },
    setSort(state, action: PayloadAction<string | null>) {
        state.sort = action.payload;
        state.page = 1;
        console.log(state.sort);
    },
    setSize(state, action: PayloadAction<number | null>) {
      state.size = action.payload;
      state.page = 1;
      console.log(state.size);
    },
    setColor(state, action: PayloadAction<string | null>) {
      state.color = action.payload;
      state.page = 1;
      console.log(state.color);
    },
    setSex(state, action: PayloadAction<string>) {
      state.sex = action.payload;
      state.page = 1;
      console.log(state.sex);
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      console.log(state.page);
    },
    setSearchValue(state, action: PayloadAction<string>) {
        state.searchValue = action.payload;
        state.page = 1; 
    },
    fetchFilterSuccess(state, action: PayloadAction<AxiosResponse<Item[]>>) {
      state.isLoading = false;
      state.items = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchFilterError(state, action: PayloadAction<AxiosResponse<Item[]>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export const {
  fetchFilter,
  fetchFilterSuccess,
  fetchFilterError,
  setSize,
  setColor,
  setSex,
  setPage,
  setSort,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
