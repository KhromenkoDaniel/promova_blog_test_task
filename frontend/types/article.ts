export type Article = {
    id: number;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    readTime: boolean;
    date: string | null;
    cover: {
        id: number;
        url: string;
        alt: string;
        width: number;
        height: number;
    };
    content: string
}

export type ArticleGridProps = {
    articles: Article[];
};

export type ArticlesPerPageSelectProps = {
    limit: number;
    onLimitChange: (limit: number) => void;
};
