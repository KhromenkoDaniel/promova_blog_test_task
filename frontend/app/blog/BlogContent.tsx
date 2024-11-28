"use client";

import { useState, useEffect } from "react";

import { ArticlesPerPageSelect } from "@/components/Article/ArticlesPerPageSelect";
import { ArticleGrid } from "@/components/Article/ArticleGrid";
import { BlogPagination } from "@/components/Pagination";

import { Article } from "@/types/article";
import { BlogContentProps } from "@/types/blog";

export default function BlogContent({ data }: BlogContentProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const [paginatedArticles, setPaginatedArticles] = useState<Article[]>([]);

    const totalArticles = data.length;
    const totalPages = Math.ceil(totalArticles / limit);

    useEffect(() => {
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        setPaginatedArticles(data.slice(startIndex, endIndex));
    }, [currentPage, limit, data]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleLimitChange = (newLimit: number) => {
        setLimit(newLimit);
        setCurrentPage(1);
    };

    return (
        <div className={"flex flex-col justify-between min-h-[calc(100vh-100px)]"}>
            <ArticlesPerPageSelect
                limit={limit}
                onLimitChange={handleLimitChange}
            />
            <ArticleGrid articles={paginatedArticles} />
            <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
