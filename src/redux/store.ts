import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";
import filtersReducer from "./slices/filtersSlice";
import preferencesReducer from "./slices/preferencesSlice";

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        filters: filtersReducer,
        preferences: preferencesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
