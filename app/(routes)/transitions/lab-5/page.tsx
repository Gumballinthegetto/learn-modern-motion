import type { Metadata } from "next";
import Lab5 from "./Lab5";

export const metadata: Metadata = {
  title: "Transitions Lab 5 - Card Exit/Enter",
  description:
    "Animate card exits and entrances with Motion transitions—combine variants, AnimatePresence, and easing to choreograph flow.",
};

export default function TransitionsLab5() {
  return <Lab5 />;
}