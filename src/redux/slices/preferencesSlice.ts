import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferencesState {
    preferredCategories: string[];
    preferredSources: string[];
    preferredAuthors: string[];
}

const getFromLocalStorage = (key: string, defaultValue: string[] = []) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
};

const initialState: PreferencesState = {
    preferredCategories: getFromLocalStorage("preferredCategories"),
    preferredSources: getFromLocalStorage("preferredSources"),
    preferredAuthors: getFromLocalStorage("preferredAuthors")
};

const preferencesSlice = createSlice({
    name: "preferences",
    initialState,
    reducers: {
        updatePreferences: (
            state,
            action: PayloadAction<{ type: "category" | "source" | "author"; value: string }>
        ) => {
            const { type, value } = action.payload;

            const updatedList =
                type === "category" ? state.preferredCategories :
                    type === "source" ? state.preferredSources :
                        type === "author" ? state.preferredAuthors : [];

            let updatedItems;

            if (updatedList.includes(value)) {
                updatedItems = updatedList.filter((item) => item !== value);
            } else {
                updatedItems = [...updatedList, value];
            }

            localStorage.setItem(
                type === "category" ? "preferredCategories" :
                    type === "source" ? "preferredSources" :
                        type === "author" ? "preferredAuthors" : "",
                JSON.stringify(updatedItems)
            );

            if (type === "category") {
                state.preferredCategories = updatedItems;
            } else if (type === "source") {
                state.preferredSources = updatedItems;
            } else if (type === "author") {
                state.preferredAuthors = updatedItems;
            }
        },
    },
});

export const { updatePreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
