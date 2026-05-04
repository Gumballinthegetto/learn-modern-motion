import type { Metadata } from "next";
import { ReactNode } from "react";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import KeyframesNav from "./KeyframesNav";
import { navigationConfig } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Sequential Logic | The Nanas Lab",
  description:
    "Choreographing multi-step states and temporal offsets. Sculpting expressive motion beats for complex, story-driven interactions.",
};

export default function KeyframesLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <section className="flex-1 px-8 pt-18">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-xl font-semibold">Sequential Logic</h1>
      <p className="text-base text-muted-foreground text-start py-4">
        Choreographing time and state. This laboratory explores the structural logic of multi-step animations, layering temporal offsets to sculpt expressive motion beats and story-driven interactions.
      </p>
      <KeyframesNav />
      <PaginationWrapper links={navigationConfig.keyframes}>
        {children}
      </PaginationWrapper>
    </div>
  </section>
  );
}