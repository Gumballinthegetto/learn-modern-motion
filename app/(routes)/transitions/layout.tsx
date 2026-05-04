import type { Metadata } from "next";
import TransitionsNav from "./TransitionsNav";
import { ReactNode } from "react";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Temporal Physics | The Nanas Lab",
  description: "Fine-tuning the feel of motion. Investigating duration, easing functions, and physical spring properties for organic movement.",
};

export default function TransitionsLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex-1 px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Temporal Physics</h1>
        <p className="text-base text-muted-foreground text-start py-4">Defining the weight and momentum of motion. This laboratory investigates the physical properties of a transition—tuning duration, easing functions, and spring dynamics to achieve organic, believable movement.</p>
        <TransitionsNav />
        <PaginationWrapper links={navigationConfig.transitions}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}