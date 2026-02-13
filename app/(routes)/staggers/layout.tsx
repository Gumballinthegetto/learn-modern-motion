import StaggersNav from "./StaggersNav";
import { PaginationWrapper } from "@/components/pagination/PaginationWrapper";
import { navigationConfig } from "@/config/navigation";
import { ReactNode } from "react";

export default function StaggersLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen px-5 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Staggers</h1>
        <p className="text-base text-muted-foreground text-start py-4">
          Practice Motion staggers: orchestrate sequential animations across multiple elements; create cascading effects with staggerChildren and delayChildren; and build coordinated transitions that bring interfaces to life with choreographed timing.
        </p>
        <StaggersNav />
        <PaginationWrapper links={navigationConfig.staggers}>
          {children}
        </PaginationWrapper>
      </div>
    </section>
  );
}