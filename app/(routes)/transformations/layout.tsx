import { Metadata } from "next";
import { ReactNode } from "react";
import TransformationsNav from "./TransformationsNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Transformations Practice",
  description: "Practice foundational transform animations with Motion. Learn translate, scale, rotate, skew, and transform-origin properties.",
};

export default function TransformationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen px-5 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Transformations</h1>
        <p className="text-base text-muted-foreground text-start py-4">Practice foundational transforms: translate, scale, rotate, skew, and transform-origin. Each exercise demonstrates common motion patterns and interaction hooks.</p>
        <TransformationsNav />
        <PaginationWrapper links={navigationConfig.transformations}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}