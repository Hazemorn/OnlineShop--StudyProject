import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlicer'

const rootReducer = combineReducers({//old
    filterReducer
})

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']