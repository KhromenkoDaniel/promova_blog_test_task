import { getStrapiData } from "@/utils/getStrapiData";
import BlogContent from "./BlogContent";
import { Post } from "@/types/post";

export default async function BlogPage() {
    const query = {
        "populate[posts][populate]": "cover",
    };

    const { data } = await getStrapiData<{ data: { posts: Post[] } }>("blog-list-page", query);

    return <BlogContent data={data.posts} />;
}
