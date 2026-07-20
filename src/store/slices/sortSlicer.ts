import { createSlice } from "@reduxjs/toolkit";

type Option = {
    sortId: number;
    name: string;
    value: string;
  }

export const initSort:Option = {
    sortId: 0,
    name: 'Sorting by...',
    value: '',
}

export const sortSlice = createSlice({
    name: 'sorting',
    initialState: initSort,
    reducers: {
        setSortId (state, action) {
            state.sortId = action.payload;
        }
    }
})

export const { setSortId } = sortSlice.actions;

export default sortSlice.reducer;