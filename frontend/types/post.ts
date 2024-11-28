export type Post = {
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

export type PostsGridProps = {
    posts: Post[];
};

export type PostsPerPageSelectProps = {
    limit: number;
    onLimitChange: (limit: number) => void;
};
