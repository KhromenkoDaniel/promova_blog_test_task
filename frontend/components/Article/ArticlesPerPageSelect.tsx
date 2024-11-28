"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

import { ArticlesPerPageSelectProps } from "@/types/article";

export function ArticlesPerPageSelect({ limit, onLimitChange }: ArticlesPerPageSelectProps) {
    const handleChange = (value: string) => {
        onLimitChange(parseInt(value, 10));
    };

    return (
        <div className="mb-4 flex grow-0 justify-center">
            <Select value={String(limit)} onValueChange={handleChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select articles per page" />
                </SelectTrigger>
                <SelectContent>
                    {[4, 6, 8, 10].map((option) => (
                        <SelectItem key={option} value={String(option)}>
                            {option} articles per page
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
