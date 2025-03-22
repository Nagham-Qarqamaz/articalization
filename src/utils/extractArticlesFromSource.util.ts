import { Article, GuardianArticle, NewsApiArticle, NytArticle } from "@Types";

export const extractArticlesFromSource = (source: string, data: { articles?: NewsApiArticle[]; response?: { docs?: NytArticle[]; results?: GuardianArticle[] } }): Article[] => {
    switch (source) {
        case "NewsAPI":
            return (data.articles || []).map((article: NewsApiArticle) => ({
                title: article.title,
                description: article.description,
                img: article.urlToImage,
                url: article.url,
                source: "NewsAPI",
                category: "Uncategorized",
                author: article?.author?.replace(/^By\s+/i, "") || "Unknown",
                publishedAt: article.publishedAt,
            }));
        case "New York Times":
            return (data.response?.docs || []).map((article: NytArticle) => ({
                title: article.abstract,
                description: article.lead_paragraph,
                img: `https://www.nytimes.com/${article.multimedia[0]?.url}`,
                url: article.web_url,
                source: "New York Times",
                category: article.section_name || "Uncategorized",
                author: article.byline?.original?.replace(/^By\s+/i, "") || "Unknown",
                publishedAt: article.pub_date,
            }));
        case "The Guardian":
            return (data.response?.results || []).map((article: GuardianArticle) => ({
                title: article.webTitle,
                description: article.fields?.trailText || "",
                img: article.fields?.thumbnail,
                url: article.webUrl,
                source: "The Guardian",
                category: article.sectionName || "Uncategorized",
                author: article.fields?.byline?.replace(/^By\s+/i, "") || "Unknown",
                publishedAt: article.webPublicationDate,
            }));
        default:
            return [];
    }
};
