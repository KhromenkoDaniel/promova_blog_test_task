import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4">{children}</main>
            <Footer />
        </div>
    );
}
