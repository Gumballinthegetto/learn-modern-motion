import type { Metadata } from "next";
import Practice1 from "@/app/ui/keyframes/Practice1";

export const metadata: Metadata = {
  title: "Keyframes Practice 1 - Bouncing Ball",
  description:
    "Animate a bouncing ball with Motion keyframes, sequencing y-position and easing to create a playful loop.",
};

export default function KeyframesPractice1() {
  return <Practice1 />;
}