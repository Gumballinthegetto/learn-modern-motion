import type { Metadata } from "next";
import Practice5 from "@/app/ui/keyframes/Practice5";

export const metadata: Metadata = {
  title: "Keyframes Practice 5 - Zigzag Path",
  description:
    "Animate a box on a zigzag path with Motion keyframes, coordinating x/y offsets and easing for a lively motion path.",
};

export default function KeyframesPractice5() {
  return <Practice5 />;
}