export type GuardianArticle = {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    fields: {
        trailText: string;
        byline: string;
        thumbnail: string;
    };
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
}
