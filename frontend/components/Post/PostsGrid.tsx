import PostCard from "@/components/Post/PostCard";

import { PostsGridProps } from "@/types/post";

export function PostsGrid({ posts }: PostsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 grow-0 sm:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
