import type { Metadata } from "next";
import Practice6 from "@/app/ui/keyframes/Practice6";

export const metadata: Metadata = {
  title: "Keyframes Practice 6 - Wave Effect",
  description:
    "Build a four-box wave animation using Motion keyframes, staggering y-offsets to create a looping wave pattern.",
};

export default function KeyframesPractice6() {
  return <Practice6 />;
}