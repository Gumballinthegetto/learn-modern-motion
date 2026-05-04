import type { Metadata } from "next";
import Lab6 from "./Lab6";

export const metadata: Metadata = {
  title: "Transitions Lab 6 - Animated Tabs",
  description:
    "Build animated tabs with Motion transitions—use shared layout animations, smooth underlines, and content fades for seamless state changes.",
};

export default function TransitionsLab6() {
  return <Lab6 />;
}