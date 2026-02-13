import type { Metadata } from "next";
import Practice2 from "./Practice2";

export const metadata: Metadata = {
  title: "Keyframes Practice 2 - Pulsating Button",
  description:
    "Build a pulsating button using Motion keyframes to animate scale and text opacity for hover/tap feedback.",
};

export default function KeyframesPractice2() {
  return <Practice2 />;
}