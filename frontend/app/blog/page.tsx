import type { Metadata } from 'next'

import { getStrapiData } from "@/utils/getStrapiData";

import BlogContent from "./BlogContent";

import { Post } from "@/types/post";

export const metadata: Metadata = {
    title: 'Blog - All Posts',
    description: 'Explore our latest blog posts on tech and more.',
    keywords: 'tech, blogs, latest posts',
    referrer: 'no-referrer',
};

export default async function BlogPage() {
    const query = {
        "populate[posts][populate]": "cover",
    };

    const { data } = await getStrapiData<{ data: { posts: Post[] } }>("blog-list-page", query);
    const { posts } = data;

    return <BlogContent data={posts} />;
}
