import type { Metadata } from "next";
import MotionValueNav from "./MotionValueNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dynamic States | The Nanas Lab",
  description: "Mastering low-level animation controls that update without re-rendering. Linking values and tracking progress for high-performance interactions.",
};

export default function MotionValueLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex-1 px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Dynamic States</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          The heartbeat of high-performance animation. This laboratory investigates MotionValues—low-level controls that react to state and scroll position without the overhead of component re-renders.
        </p>
        <MotionValueNav />
        <PaginationWrapper links={navigationConfig.motionValue}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}
