import type { Metadata } from "next";
import WhileInViewNav from "./WhileInViewNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Viewport Mechanics | The Nanas Lab",
  description: "Exploring the interaction between scroll position and element visibility. Precision triggers for entrance and scroll-linked animations.",
};

export default function WhileInViewLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex-1 px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Viewport Mechanics</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          Observing how elements breathe as they enter the frame. This laboratory focuses on the delicate timing of entrance animations, scroll thresholds, and viewport-aware interactions.
        </p>
        <WhileInViewNav />
        <PaginationWrapper links={navigationConfig.whileInView}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}
