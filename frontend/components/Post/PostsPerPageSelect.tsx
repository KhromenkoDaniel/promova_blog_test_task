"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { PostsPerPageSelectProps } from "@/types/post";

export function PostsPerPageSelect({
  limit,
  onLimitChangeAction,
}: PostsPerPageSelectProps) {
  const handleChange = (value: string) => {
    onLimitChangeAction(parseInt(value, 10));
  };

  return (
    <div className="mb-4 flex grow-0 justify-center">
      <Select value={String(limit)} onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select posts per page" />
        </SelectTrigger>
        <SelectContent>
          {[4, 6, 8, 10].map((option) => (
            <SelectItem key={option} value={String(option)}>
              {option} posts per page
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
