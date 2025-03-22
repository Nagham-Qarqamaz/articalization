import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, NewsApiArticle, NytArticle, GuardianArticle } from "@Types";
import { extractArticlesFromSource, getLocalStorageArray } from "@Utils";

interface ArticlesState {
    value: Article[];
    currentPage: number;
    itemsPerPage: number;
}

const initialState: ArticlesState = {
    value: [],
    currentPage: 1,
    itemsPerPage: 6,
};

const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        updateArticles: (state, action: PayloadAction<{ newsApi: NewsApiArticle[], nyt: NytArticle[], guardian: GuardianArticle[] }>) => {
            const newsApiArticles = extractArticlesFromSource("NewsAPI", { articles: action.payload.newsApi });
            const nytArticles = extractArticlesFromSource("New York Times", { response: { docs: action.payload.nyt } });
            const guardianArticles = extractArticlesFromSource("The Guardian", { response: { results: action.payload.guardian } });

            const updatedState = [...newsApiArticles, ...nytArticles, ...guardianArticles];

            const preferredCategories = getLocalStorageArray("preferredCategories");
            const preferredSources = getLocalStorageArray("preferredSources");
            const preferredAuthors = getLocalStorageArray("preferredAuthors");

            const sortedState = updatedState
                .map((article) => ({
                    ...article,
                    categoryPriority: preferredCategories.includes(article.category) ? 3 : 0,
                    authorPriority: preferredAuthors.includes(article.author) ? 2 : 0,
                    sourcePriority: preferredSources.includes(article.source) ? 1 : 0,
                }))
                .sort((a, b) => {
                    const priorityA = a.authorPriority + a.categoryPriority + a.sourcePriority;
                    const priorityB = b.authorPriority + b.categoryPriority + b.sourcePriority;

                    if (priorityA !== priorityB) return priorityB - priorityA;
                    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
                });

            state.value = sortedState;
            state.currentPage = 1;
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },

        setItemsPerPage: (state, action: PayloadAction<number>) => {
            state.itemsPerPage = action.payload;
        },
    }

});

export const { updateArticles, setPage, setItemsPerPage } = articlesSlice.actions;
export default articlesSlice.reducer;
