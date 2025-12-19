import type { Metadata } from "next";
import Practice3 from "@/app/ui/keyframes/Practice3";

export const metadata: Metadata = {
  title: "Keyframes Practice 3 - Color Cycle",
  description:
    "Animate a square through a looping color cycle with Motion keyframes, practicing multi-stop timing and easing.",
};

export default function KeyframesPractice3() {
  return <Practice3 />;
}