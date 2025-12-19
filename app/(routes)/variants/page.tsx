import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Variants - Motion Practice",
  description:
    "Start your Motion variants journey here. Use this entry point to explore exercises that teach reusable animation states, expressive intent, and coordinated parent–child animations.",
};

export default function VariantsPage() {
  return redirect('/variants/practice-1');
}