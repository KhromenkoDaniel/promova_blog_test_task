import BlogLayout from "./BlogLayout";

export default async function Layout({ children }: { children: React.ReactNode }) {
    return <BlogLayout>{children}</BlogLayout>;
}
