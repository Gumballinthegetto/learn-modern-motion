import type { Metadata } from "next";
import Lab7 from "./Lab7";

export const metadata: Metadata = {
  title: "Keyframes Lab 7 - Background Color Loop",
  description:
    "Animate a full-screen background through multiple colors using Motion keyframes, practicing long-running loops and smooth easing.",
};

export default function KeyframesLab7() {
  return <Lab7 />;
}