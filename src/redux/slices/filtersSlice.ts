import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Source } from "@Types";

interface FiltersState {
    query: string;
    from: string;
    to: string;
    category: string;
    source: Source;
}

const initialState: FiltersState = {
    query: "",
    from: "",
    to: "",
    category: "",
    source: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        updateQueryFilter: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },

        updateCategoryFilter: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },

        updateSourceFilter: (state, action: PayloadAction<Source>) => {
            state.source = action.payload;
        },

        updateDateFilters: (state, action: PayloadAction<{ fromDate: string, toDate: string }>) => {
            state.from = action.payload.fromDate;
            state.to = action.payload.toDate;
        },

        resetFilters: () => {
            return initialState
        },
    },
});

export const { updateQueryFilter, updateCategoryFilter, updateSourceFilter, updateDateFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
