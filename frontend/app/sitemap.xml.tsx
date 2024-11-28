import { NextApiResponse } from "next";

import { getStrapiData } from "@/utils/getStrapiData";

import { Post } from "@/types/post";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

function generateSiteMap(posts: Post[]) {
        return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>${URL}/</loc>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${URL}/blog</loc>
        <priority>0.9</priority>
    </url>
    ${posts
      .map((post) => {
        return `
    <url>
        <loc>${`${URL}/blog/${post.slug}`}</loc>
        <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    `;
    })
    .join("")}
    </urlset>
        `;
        }

        export async function getServerSideProps({ res }: { res: NextApiResponse }) {
        const response = await getStrapiData<{ data: Post[] }>("posts", {
        populate: "*",
        });

        const posts = response.data;

        const sitemap = generateSiteMap(posts);

        res.setHeader("Content-Type", "text/xml");
        res.write(sitemap);
        res.end();

        return {
        props: {},
        };
        }

        export default function SiteMap() {
        return null;
        }
