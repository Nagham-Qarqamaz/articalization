import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectPagination = createSelector(
    (state: RootState) => state.articles,
    (articles) => ({
        currentPage: articles.currentPage,
        value: articles.value,
        itemsPerPage: articles.itemsPerPage,
    })
);
