import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../types/types";


interface DetailState {
    good: Item | null;
}

const initDetail: DetailState = {
    good: null,
};

export const detailSlice = createSlice({
    name: "detail",
    initialState: initDetail,
    reducers: {
        openDetails(state, action: PayloadAction<Item>) {
            state.good = action.payload;
        }  
    }
})

export const { openDetails } = detailSlice.actions;

export default detailSlice.reducer;