import type { Metadata } from "next";
import Lab4 from "./Lab4";

export const metadata: Metadata = {
  title: "Keyframes Lab 4 - Sliding Text",
  description:
    "Animate text sliding in from the left using Motion keyframes, timing opacity and position for a smooth entrance.",
};

export default function KeyframesLab4() {
  return <Lab4 />;
}