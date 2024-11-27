'use client';
import { useRouter, useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";

export default function Header() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const timer = setTimeout(() => {
            const params = new URLSearchParams(searchParams as any);

            if (query) {
                params.set("search", query);
            } else {
                params.delete("search");
            }

            router.push(`/blog?${params.toString()}`);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, router, searchParams]);

    return (
        <header className="p-4 bg-gray-100 border-b">
            <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 border rounded-lg"
            />
        </header>
    );
}
