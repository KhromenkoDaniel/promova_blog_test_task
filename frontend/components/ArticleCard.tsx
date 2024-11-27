"use client";
import Image from "next/image";

interface ArticleCardProps {
    title: string;
    description: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
    date: string | null;
    readTime: boolean;
}

export default function ArticleCard({ title, description, image, date, readTime }: ArticleCardProps) {
    return (
        <div className="border rounded-lg p-4">
            <Image src={(process.env.NEXT_PUBLIC_API_BASE_URL + image?.url) || ""}
                   width={image.width}
                   height={image.height}
                   alt={title}
                   priority
                   className="w-full h-48 object-cover rounded-md"/>
            <h2 className="mt-2 text-lg font-bold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="text-sm text-gray-500">
                <span>{date || "No date"}</span> | <span>{readTime ? "Quick read" : "Long read"}</span>
            </div>
        </div>
    );
}
