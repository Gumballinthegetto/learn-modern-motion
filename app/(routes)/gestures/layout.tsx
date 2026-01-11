import { Metadata } from "next";
import { ReactNode } from "react";
import GesturesNav from "@/app/ui/gestures/GesturesNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Gestures - Motion Practice",
  description:
    "Start your Motion gestures journey here. Use this entry point to explore exercises that teach interactive animations, touch and drag interactions, and responsive user feedback.",
};

export default function GesturesLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen px-5 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Gestures</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          Practice Motion gestures: handle hover, tap, and drag interactions; create responsive feedback with whileHover and whileTap; and build intuitive user experiences with drag constraints and momentum.
        </p>
        <GesturesNav />
        <PaginationWrapper links={navigationConfig.gestures}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}