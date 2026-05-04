import { Metadata } from "next";
import { ReactNode } from "react";
import GesturesNav from "./GesturesNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Tactile Interactions | The Nanas Lab",
  description:
    "Analyzing the dialogue between user input and visual response. Exploring the nuances of hover, tap, and drag-based interactions.",
};

export default function GesturesLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex-1 px-8 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Tactile Interactions</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          Deciphering the language of touch and intent. This laboratory investigates how interfaces respond to human input, from the subtlety of a hover to the physics-based feedback of a drag interaction.
        </p>
        <GesturesNav />
        <PaginationWrapper links={navigationConfig.gestures}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}