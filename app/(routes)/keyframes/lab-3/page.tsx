import type { Metadata } from "next";
import Lab3 from "./Lab3";

export const metadata: Metadata = {
  title: "Keyframes Lab 3 - Color Cycle",
  description:
    "Animate a square through a looping color cycle with Motion keyframes, practicing multi-stop timing and easing.",
};

export default function KeyframesLab3() {
  return <Lab3 />;
}