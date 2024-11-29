"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function ReturnButton() {
  const router = useRouter();
  const pathname = usePathname();

  const showReturnButton = pathname.includes("/blog/");

  if (!showReturnButton) return null;

  return (
    <Button variant="outline" size="lg" onClick={() => router.push("/")}>
      Return to Home
    </Button>
  );
}
