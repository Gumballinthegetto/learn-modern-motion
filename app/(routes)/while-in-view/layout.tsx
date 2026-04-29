import type { Metadata } from "next";
import WhileInViewNav from "./WhileInViewNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "While In View Practice",
  description: "Learn to trigger animations when elements enter the viewport using whileInView, viewport options, and scroll-linked animations.",
};

export default function WhileInViewLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">While In View</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          Practice Viewport Animations: master the whileInView prop to animate elements as they scroll into view. Learn to control trigger points with margins and thresholds, and use the viewport prop for one-time or repeatable animations.
        </p>
        <WhileInViewNav />
        <PaginationWrapper links={navigationConfig.whileInView}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}
