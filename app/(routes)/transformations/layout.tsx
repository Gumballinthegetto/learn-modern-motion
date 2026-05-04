import { Metadata } from "next";
import { ReactNode } from "react";
import TransformationsNav from "./TransformationsNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Spatial Geometry | The Nanas Lab",
  description: "Analyzing foundational transform properties. Precision manipulation of translation, scale, rotation, and skew for structural motion.",
};

export default function TransformationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex-1 px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Spatial Geometry</h1>
        <p className="text-base text-muted-foreground text-start py-4">The mathematics of visual change. This laboratory explores the manipulation of spatial properties—translation, scale, rotation, and origin—to define the structural foundation of movement.</p>
        <TransformationsNav />
        <PaginationWrapper links={navigationConfig.transformations}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}