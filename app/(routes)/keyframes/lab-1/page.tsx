import type { Metadata } from "next";
import Lab1 from "./Lab1";

export const metadata: Metadata = {
  title: "Keyframes Lab 1 - Bouncing Ball",
  description:
    "Animate a bouncing ball with Motion keyframes, sequencing y-position and easing to create a playful loop.",
};

export default function KeyframesLab1() {
  return <Lab1 />;
}