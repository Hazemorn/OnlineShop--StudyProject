import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlicer'
import sortSlice from './slices/sortSlicer'

const rootReducer = combineReducers({
    filterSlice,
    sortSlice
})

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']