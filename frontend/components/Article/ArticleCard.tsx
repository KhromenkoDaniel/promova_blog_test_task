"use client";

import Image from "next/image";

import { Article } from "../../types/article";

import { calculateReadingTime } from "../../utils/readingTime";

export default function ArticleCard({ title, description, cover, date, readTime, content }: Article) {
    const readingTime = readTime ? calculateReadingTime(content) : "";

    return (
        <div className="border rounded-lg p-4">
            <Image
                src={(process.env.NEXT_PUBLIC_API_BASE_URL + cover?.url) || ""}
                width={cover.width}
                height={cover.height}
                quality={75}
                alt={title}
                priority
                className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="mt-2 text-lg font-bold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="text-sm text-gray-500">
                <span>{date || "No date"}</span>
                <span>{readTime ? ` | ${readingTime} minute(s) to read` : ""}</span>
            </div>
        </div>
    );
}
