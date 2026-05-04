import type { Metadata } from "next";
import StaggersNav from "./StaggersNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Orchestrated Sequences | The Nanas Lab",
  description: "Orchestrating sequential animations across multiple elements. Creating cascading effects with complex child propagation and timing.",
};

export default function StaggersLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex-1 px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Orchestrated Sequences</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          The art of rhythmic motion. This laboratory examines how animations propagate through groups of elements, creating cascading effects and coordinated transitions through choreographed timing.
        </p>
        <StaggersNav />
        <PaginationWrapper links={navigationConfig.staggers}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}