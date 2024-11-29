"use client";

import { useState, useEffect } from "react";

import { PostsPerPageSelect } from "@/components/Post/PostsPerPageSelect";
import { PostsGrid } from "@/components/Post/PostsGrid";
import { BlogPagination } from "@/components/Pagination";

import { Post } from "@/types/post";
import { BlogContentProps } from "@/types/blog";

export default function BlogContent({ data }: BlogContentProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const [paginatedPosts, setPaginatedPosts] = useState<Post[]>([]);

    const totalPosts = data.length;
    const totalPages = Math.ceil(totalPosts / limit);

    useEffect(() => {
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        setPaginatedPosts(data.slice(startIndex, endIndex));
    }, [currentPage, limit, data]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleLimitChange = (newLimit: number) => {
        setLimit(newLimit);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col justify-between">
            <PostsPerPageSelect
                limit={limit}
                onLimitChange={handleLimitChange}
            />
            <PostsGrid posts={paginatedPosts} />
            <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
