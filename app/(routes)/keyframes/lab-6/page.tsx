import type { Metadata } from "next";
import Lab6 from "./Lab6";

export const metadata: Metadata = {
  title: "Keyframes Lab 6 - Wave Effect",
  description:
    "Build a four-box wave animation using Motion keyframes, staggering y-offsets to create a looping wave pattern.",
};

export default function KeyframesLab6() {
  return <Lab6 />;
}