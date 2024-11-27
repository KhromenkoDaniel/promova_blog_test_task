import { fetchFromStrapi } from "@/utils/fetchFromStrapi";
import BlogContent from "./BlogContent";

export default async function BlogPage({
                                           params,
                                           searchParams,
                                       }: {
    params: Record<string, any>;
    searchParams: { page?: string; limit?: string; search?: string };
}) {
    // Доступ напряму до властивостей searchParams
    const page = parseInt(searchParams.page || "1", 10);
    const limit = parseInt(searchParams.limit || "2", 10);
    const search = searchParams.search || "";

    const { data, meta } = await fetchFromStrapi<{ data: any[]; meta: any }>("articles", {
        "pagination[page]": page,
        "pagination[pageSize]": limit,
        populate: ["cover"],
        _q: search,
    });

    return <BlogContent articles={data} meta={meta} currentPage={page} limit={limit} />;
}
