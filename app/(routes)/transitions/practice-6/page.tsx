import type { Metadata } from "next";
import Practice6 from "@/app/ui/transitions/Practice6";

export const metadata: Metadata = {
  title: "Transitions Practice 6 - Animated Tabs",
  description:
    "Build animated tabs with Motion transitions—use shared layout animations, smooth underlines, and content fades for seamless state changes.",
};

export default function TransitionsPractice6() {
  return <Practice6 />;
}