import type { Metadata } from "next";
import Lab5 from "./Lab5";

export const metadata: Metadata = {
  title: "Keyframes Lab 5 - Zig Zag Animation",
  description: "Create a zigzag animation for a box moving across the screen.",
};

export default function KeyframesLab5() {
  return <Lab5 />;
}