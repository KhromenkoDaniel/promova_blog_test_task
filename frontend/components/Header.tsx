import { ReturnButton } from "@/components/Post/ReturnButton";

export default function Header() {
  return (
    <header className="p-4 bg-gray-100 border-b flex justify-between items-center">
      <h1 className="text-3xl font-bold">Promova Strapi Blog</h1>

      <ReturnButton />
    </header>
  );
}
