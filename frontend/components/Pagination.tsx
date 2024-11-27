"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from "@/components/ui/pagination";

interface PaginationProps {
    total: number;
    current: number;
}

export default function BlogPagination({ total, current }: PaginationProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const limit = parseInt(searchParams.get("limit") || "2");
    const totalPages = Math.ceil(total / limit);

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams as any);
        params.set("page", page.toString());
        router.push(`/blog?${params.toString()}`);
    };

    return (
        <Pagination>
            <PaginationContent>
                {current > 1 && (
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => handlePageChange(current - 1)}
                            href="#"
                        />
                    </PaginationItem>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                        {Math.abs(current - page) > 1 && page !== 1 && page !== totalPages ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink
                                href="#"
                                isActive={current === page}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}

                {current < totalPages && (
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => handlePageChange(current + 1)}
                            href="#"
                        />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
}
