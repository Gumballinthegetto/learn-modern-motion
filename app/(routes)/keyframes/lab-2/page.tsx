import type { Metadata } from "next";
import Lab2 from "./Lab2";

export const metadata: Metadata = {
  title: "Keyframes Lab 2 - Pulsating Button",
  description:
    "Build a pulsating button using Motion keyframes to animate scale and text opacity for hover/tap feedback.",
};

export default function KeyframesLab2() {
  return <Lab2 />;
}