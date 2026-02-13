import type { Metadata } from "next";
import Practice4 from "./Practice4";

export const metadata: Metadata = {
  title: "Keyframes Practice 4 - Sliding Text",
  description:
    "Animate text sliding in from the left using Motion keyframes, timing opacity and position for a smooth entrance.",
};

export default function KeyframesPractice4() {
  return <Practice4 />;
}