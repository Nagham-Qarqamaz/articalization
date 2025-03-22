export type NewsApiArticle = {
    source: {
        id: number,
        name: string
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}