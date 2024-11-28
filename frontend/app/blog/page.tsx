import { getStrapiData } from "@/utils/getStrapiData";
import BlogContent from "./BlogContent";
import { Article } from "@/types/article";

export default async function BlogPage() {
    const query = {
        "populate[articles][populate]": "cover",
    };

    const { data } = await getStrapiData<{ data: { articles: Article[] } }>("blog-list-page", query);
    
    return <BlogContent data={data.articles} />;
}
