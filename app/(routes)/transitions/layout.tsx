import type { Metadata } from "next";
import TransitionsNav from "@/app/ui/transitions/TransitionsNav";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Transitions Practice",
  description: "Practice transition animations with Motion. Learn duration, ease, delay, and transition types for smooth motion experiences.",
};

export default function TransitionsLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen px-5 pt-18">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">Transitions</h1>
        <p className="text-base text-muted-foreground text-start py-4">Practice transition animations: duration, ease, delay, and transition types. Learn to create smooth and polished motion experiences.</p>
        <TransitionsNav />
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}