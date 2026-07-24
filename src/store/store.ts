import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlicer'
import cartReducer from './slices/cartSlicer'
import detailReducer from './slices/detailSlicer';

const rootReducer = combineReducers({//old
    filterReducer,
    cartReducer,
    detailReducer
})

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']