export type NytArticle = {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    source: string;
    multimedia: Multimedia[];
    pub_date: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    byline: Byline;
    type_of_material: string;
    _id: string;
    word_count: number;
    uri: string;
}

type Multimedia = {
    rank: number;
    subtype: string;
    caption: string | null;
    credit: string | null;
    type: string;
    url: string;
    height: number;
    width: number;
    legacy: Legacy;
    subType: string;
    crop_name: string;
}

type Legacy = {
    xlarge?: string;
    xlargewidth?: number;
    xlargeheight?: number;
}

type Byline = {
    original: string;
    person: Person[];
    organization: string | null;
}

type Person = {
    firstname: string;
    middlename: string | null;
    lastname: string;
    qualifier: string | null;
    title: string | null;
    role: string;
    organization: string;
    rank: number;
}
