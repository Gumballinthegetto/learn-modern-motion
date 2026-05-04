import type { Metadata } from "next";
import Lab3 from "./Lab3";

export const metadata: Metadata = {
  title: "Transitions Lab 3 - Modal with Slide-down Transition",
  description:
    "Build a Motion-powered modal that animates in and out with a slide-down effect, using variants, easing, and AnimatePresence.",
};

export default function TransitionsLab3() {
  return <Lab3 />;
}