import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectPaginatedArticles = createSelector(
    (state: RootState) => state.articles.value,
    (state: RootState) => state.articles.currentPage,
    (state: RootState) => state.articles.itemsPerPage,
    (value, currentPage, itemsPerPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return value.slice(startIndex, startIndex + itemsPerPage);
    }
);
