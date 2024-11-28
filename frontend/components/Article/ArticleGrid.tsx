import ArticleCard from "@/components/Article/ArticleCard";

import { ArticleGridProps } from "@/types/article";

export function ArticleGrid({ articles }: ArticleGridProps) {
    return (
        <div className="grid grid-cols-1 gap-4 grow-0 sm:grid-cols-2">
            {articles.map((post) => (
                <ArticleCard key={post.id} {...post} />
            ))}
        </div>
    );
}
