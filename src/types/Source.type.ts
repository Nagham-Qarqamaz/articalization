const sources = ["NewsAPI", "New York Times", "The Guardian", ""] as const;

export type Source = (typeof sources)[number];

export const isSource = (query: string): query is Source => {
    return sources.includes(query as Source);
};