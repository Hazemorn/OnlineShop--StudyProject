import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../types/types";

interface FilterResponse {
  status: number;
  message: string;
}

interface FetchSuccessPayload {
  items: Item[];
  status: number;
  message: string;
  hasActiveFilters: boolean
  //totalCount: number;
}

interface FetchErrorPayload {
  status: number;
  message: string;
}

interface InitData {
  items: Item[];
  page: number;
  sort: string;
  searchValue: string; 
  size: string | null;//number
  setSort: string | null;
  color: string | null;
  sex: number;//string
  isLoading: boolean;
  hasActiveFilters: boolean;
  //totalCount: number;
  response: FilterResponse;
};

const initFilter: InitData = {
  items: [],
  page: 1,
  sort: "",
  searchValue: "",
  size: null,
  setSort: "",
  color: null,
  sex: 1,
  isLoading: false, 
  hasActiveFilters: false,
  //totalCount: 0,
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
    setSize(state, action: PayloadAction<string | null>) {
      state.size = action.payload;
      state.page = 1;
      console.log(state.size);
    },
    setColor(state, action: PayloadAction<string | null>) {
      state.color = action.payload;
      state.page = 1;
      console.log(state.color);
    },
    setSex(state, action: PayloadAction<number>) {
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
    fetchFilterSuccess(state, action: PayloadAction<FetchSuccessPayload>) {
      state.isLoading = false;
      state.items = action.payload.items;
      state.hasActiveFilters = action.payload.hasActiveFilters;
      //console.log(state.hasActiveFilters);
      //state.totalCount = action.payload.totalCount;
      //console.log(state.totalCount);
      state.response = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    fetchFilterError(state, action: PayloadAction<FetchErrorPayload>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.message,
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
