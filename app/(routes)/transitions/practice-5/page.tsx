import type { Metadata } from "next";
import Practice5 from "./Practice5";

export const metadata: Metadata = {
  title: "Transitions Practice 5 - Card Exit/Enter",
  description:
    "Animate card exits and entrances with Motion transitions—combine variants, AnimatePresence, and easing to choreograph flow.",
};

export default function TransitionsPractice5() {
  return <Practice5 />;
}