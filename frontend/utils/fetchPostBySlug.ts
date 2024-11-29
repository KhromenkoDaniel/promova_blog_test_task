import { Post, StrapiResponse } from "@/types/post";
import { getStrapiData } from "@/utils/getStrapiData";

export async function fetchPostBySlug(
  slug: string,
): Promise<StrapiResponse<Post>> {
  return await getStrapiData("posts", {
    filters: { slug },
    populate: "*",
  });
}
