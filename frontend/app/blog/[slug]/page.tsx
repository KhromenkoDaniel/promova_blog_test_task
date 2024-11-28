import { Metadata } from "next";
import Image from "next/image";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import ErrorBoundary from "@/components/ErrorBoundary";

import { getStrapiData } from "@/utils/getStrapiData";

import { Post, SinglePostProps, StrapiResponse } from "@/types/post";

export async function generateMetadata(
    { params }: SinglePostProps,
): Promise<Metadata> {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const response: StrapiResponse<Post> = await getStrapiData("posts", {
        filters: { slug },
        populate: "*",
    });

    const post = response?.data?.[0];

    if (!post) {
        return {
            title: "Article Not Found",
            description: "",
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
        },
    };
}

async function fetchArticle(slug: string): Promise<StrapiResponse<Post>> {
    return await getStrapiData("posts", {
        filters: { slug },
        populate: "*",
    });
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: SinglePostProps) {
    const resolvedParams = await params;
    const postData: StrapiResponse<Post> = await fetchArticle(resolvedParams.slug);

    if (!postData?.data?.length) {
        return (
            <ErrorBoundary>
                <div className="text-center py-10">
                    <h1 className="text-2xl font-bold">Article Not Found</h1>
                    <p>The article you are looking for does not exist or was removed.</p>
                </div>
            </ErrorBoundary>
        );
    }

    const post = postData.data[0];
    const { title, description, content, cover } = post;

    return (
        <article className="container mx-auto py-10">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold mt-4">{title}</h1>
                {description && (
                    <p className="text-gray-600 mt-2 text-lg">{description}</p>
                )}
                {cover && (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${cover.url}`}
                        alt={title || ""}
                        width={cover.width}
                        height={cover.height}
                        className="rounded-lg w-full object-cover"
                        priority
                    />
                )}
            </header>
            <section className="prose lg:prose-xl dark:prose-invert max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </section>
        </article>
    );
}
