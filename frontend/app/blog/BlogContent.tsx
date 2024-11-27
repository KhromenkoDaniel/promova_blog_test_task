"use client";

import ArticleCard from "@/components/ArticleCard";
import ArticlesPerPageSelect from "@/components/ArticlesPerPageSelect";
import BlogPagination from "@/components/Pagination";

interface BlogContentProps {
    articles: any[];
    meta: { pagination: { total: number } };
    currentPage: number;
    limit: number;
}

export default function BlogContent({ articles, meta, currentPage }: BlogContentProps) {
    return (
        <>
            <ArticlesPerPageSelect />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {articles.map((post) => (
                    <ArticleCard
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.cover}
                        date={post.date}
                        readTime={post.readTime}
                    />
                ))}
            </div>
            <BlogPagination total={meta.pagination.total} current={currentPage} />
        </>
    );
}
