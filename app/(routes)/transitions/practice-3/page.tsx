import type { Metadata } from "next";
import Practice3 from "@/app/ui/transitions/Practice3";

export const metadata: Metadata = {
  title: "Transitions Practice 3 - Modal with Slide-down Transition",
  description:
    "Build a Motion-powered modal that animates in and out with a slide-down effect, using variants, easing, and AnimatePresence.",
};

export default function TransitionsPractice3() {
  return <Practice3 />;
}