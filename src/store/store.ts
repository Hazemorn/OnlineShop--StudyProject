import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlicer'
import cartReducer from './slices/cartSlicer'

const rootReducer = combineReducers({//old
    filterReducer,
    cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']