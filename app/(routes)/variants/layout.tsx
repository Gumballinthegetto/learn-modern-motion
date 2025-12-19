import type { Metadata } from "next";
import { ReactNode } from "react";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";
import VariantsNav from "@/app/ui/variants/VariantsNav";

export const metadata: Metadata = {
  title: "Variants Practice",
  description:
    "Practice Motion variants. Learn how to define reusable animation states, coordinate parent–child animations, and orchestrate complex interface flows.",
};

export default function VariantsLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen px-5 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Variants</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          Practice Motion variants: define base, hover, tap, and active states; share animation logic across components; and choreograph complex animations with simple, declarative APIs.
        </p>
        <VariantsNav />
        <PaginationWrapper links={navigationConfig.variants}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}