import type { Metadata } from "next";
import Lab5 from "./Lab5";

export const metadata: Metadata = {
  title: "Keyframes Lab 5 - Zigzag Path",
  description:
    "Animate a box on a zigzag path with Motion keyframes, coordinating x/y offsets and easing for a lively motion path.",
};

export default function KeyframesLab5() {
  return <Lab5 />;
}