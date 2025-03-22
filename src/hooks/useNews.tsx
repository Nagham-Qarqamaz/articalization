import { useEffect } from "react";
import useFetchNews from "./useFetchNews";
import { RootState, updateArticles } from "@Redux";
import { useDispatch, useSelector } from "react-redux";

function useNews() {
	const filters = useSelector((state: RootState) => state.filters);
	const dispatch = useDispatch();

	const {
		data: nyt,
		isLoading: isLoading1,
		error: error1,
	} = useFetchNews("New York Times");
	const {
		data: newsApi,
		isLoading: isLoading2,
		error: error2,
	} = useFetchNews("NewsAPI");
	const {
		data: guardian,
		isLoading: isLoading3,
		error: error3,
	} = useFetchNews("The Guardian");

	useEffect(() => {
		dispatch(
			updateArticles({
				nyt:
					nyt?.response?.docs &&
					(filters.source == "New York Times" || filters.source == "")
						? nyt.response.docs
						: [],
				newsApi:
					newsApi?.articles &&
					(filters.source == "NewsAPI" || filters.source == "")
						? newsApi.articles
						: [],
				guardian:
					guardian?.response?.results &&
					(filters.source == "The Guardian" || filters.source == "")
						? guardian.response.results
						: [],
			})
		);
	}, [nyt, newsApi, guardian, filters]);

	const isLoadingValues = {
		"": isLoading1 || isLoading2 || isLoading3,
		"New York Times": isLoading1,
		NewsAPI: isLoading2,
		"The Guardian": isLoading3,
	};
	const errorValues = {
		"": [error1, error2, error3].filter(Boolean),
		"New York Times": [error1].filter(Boolean),
		NewsAPI: [error2].filter(Boolean),
		"The Guardian": [error3].filter(Boolean),
	};

	const isLoading = isLoadingValues[filters.source];
	const errors = errorValues[filters.source] || [];

	return { isLoading, errors };
}

export default useNews;
