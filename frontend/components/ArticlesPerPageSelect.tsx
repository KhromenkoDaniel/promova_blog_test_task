'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function ArticlesPerPageSelect() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const limit = searchParams.get("limit") || "2";

    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams as any);
        params.set("limit", value);
        params.set("page", "1");
        router.push(`/blog?${params.toString()}`);
    };

    return (
        <div className="mb-4 flex justify-center">
            <Select value={limit} onValueChange={handleChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select articles per page" />
                </SelectTrigger>
                <SelectContent>
                    {[2, 4, 6, 8].map((option) => (
                        <SelectItem key={option} value={String(option)}>
                            {option} articles per page
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
