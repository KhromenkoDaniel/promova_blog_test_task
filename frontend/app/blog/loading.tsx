import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Skeleton className="h-10 w-48 rounded-md" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}
