import { ReactNode } from "react";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import KeyframesNav from "@/app/ui/keyframes/KeyframesNav";
import { navigationConfig } from "@/config/navigation";

export default function KeyframesLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <section className="min-h-screen px-5 pt-18">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-xl font-semibold">Keyframes</h1>
      <p className="text-base text-muted-foreground text-start py-4">
        Practice keyframe animations: choreograph multi-step states, layer offsets, and sculpt expressive motion beats for polished, story-driven interactions.”
      </p>
      <KeyframesNav />
      <PaginationWrapper links={navigationConfig.keyframes}>
        {children}
      </PaginationWrapper>
    </div>
  </section>
  );
}