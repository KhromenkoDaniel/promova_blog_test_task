import { Post } from "./post";

export type BlogContentProps = {
    data:  Post[];
}

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};
