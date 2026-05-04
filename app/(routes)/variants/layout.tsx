import type { Metadata } from "next";
import { ReactNode } from "react";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";
import VariantsNav from "./VariantsNav";

export const metadata: Metadata = {
  title: "State Architecture | The Nanas Lab",
  description:
    "Organizing reusable animation logic and declarative states. Investigating parent-child coordination and complex interface flows.",
};

export default function VariantsLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex-1 px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">State Architecture</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          Constructing the blueprint of motion. This laboratory explores how to organize complex animation logic through declarative variants, enabling reusable states and seamless coordination across component hierarchies.
        </p>
        <VariantsNav />
        <PaginationWrapper links={navigationConfig.variants}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}