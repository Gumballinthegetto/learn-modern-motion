import type { Metadata } from "next";
import MotionValueNav from "./MotionValueNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Motion Values Practice",
  description: "Learn to use MotionValues (useMotionValue, useTransform, useScroll) for advanced, performant animations that react to state or scroll position.",
};

export default function MotionValueLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Motion Values</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          Practice Motion Values: master low-level animation controls that update without re-rendering components. Learn to link values with useTransform, track scroll progress with useScroll, and create reactive, high-performance interactions.
        </p>
        <MotionValueNav />
        <PaginationWrapper links={navigationConfig.motionValue}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}
