import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Keyframes - Motion Practice",
  description:
    "Enter the keyframes practice track to learn multi-step animations, offsets, and expressive motion sequencing with Motion.",
};

export default function KeyframesPage() {
  return redirect('/keyframes/practice-1');
}