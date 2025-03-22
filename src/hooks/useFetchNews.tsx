import axios from "axios";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@Redux";
import { Source } from "@Types";

const fetchData = async (url: string) => {
	if (!url) return null;
	const { data } = await axios.get(url);
	return data;
};

const news_api_key = import.meta.env.VITE_NEWSAPI_KEY;
const nyt_api_key = import.meta.env.VITE_NYT_API_KEY;
const guardian_api_key = import.meta.env.VITE_GUARDIAN_API_KEY;

function useFetchNews(source: Source) {
	const filters = useSelector((state: RootState) => state.filters);

	const urls: Record<Source, string> = {
		NewsAPI:
			`https://newsapi.org/v2/${
				filters.category ? "top-headlines" : "everything"
			}?q=${filters.query || "e"}` +
			(filters.from ? `&from=${filters.from}` : "") +
			(filters.to ? `&to=${filters.to}` : "") +
			(filters.category ? `&category=${filters.category}` : "") +
			`&pageSize=100` +
			`&apiKey=${news_api_key}`,

		"New York Times":
			`https://api.nytimes.com/svc/search/v2/articlesearch.json` +
			`?q=${filters.query}` +
			(filters.from ? `&begin_date=${filters.from}` : "") +
			(filters.to ? `&end_date=${filters.to}` : "") +
			(filters.category ? `&fq=news_desk:("${filters.category}")` : "") +
			`&page-size=100` +
			`&api-key=${nyt_api_key}`,

		"The Guardian":
			`https://content.guardianapis.com/search?show-fields=byline,trailText,thumbnail` +
			`&q=${filters.query}` +
			(filters.from ? `&from-date=${filters.from}` : "") +
			(filters.to ? `&to-date=${filters.to}` : "") +
			(filters.category ? `&section=${filters.category}` : "") +
			`&page-size=100` +
			`&api-key=${guardian_api_key}`,

		"": "",
	};

	const url = urls[source];

	const { data, isLoading, error } = useQuery({
		queryKey: [`get-${source}-articles`, filters],
		queryFn: () => fetchData(url),
		enabled: !!url,
	});

	return { data, isLoading, error };
}

export default useFetchNews;
