import { Article } from "./article";

export type BlogContentProps = {
    data:  Article[];
}

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};
