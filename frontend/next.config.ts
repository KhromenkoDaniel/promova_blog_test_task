import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
            },
            {
                hostname: "growing-love-1808c4df9c.media.strapiapp.com",
            },
        ],
    },
    async redirects() {
    return [
        {
            source: '/',
            destination: '/blog',
            permanent: true,
        },
    ];
},
    async headers() {
        return [
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/xml',
                    },
                ],
            },
            {
                source: '/robots.txt',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'text/plain',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
