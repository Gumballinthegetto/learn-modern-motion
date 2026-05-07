import type { Metadata } from "next";
import Lab4 from "./Lab4";

export const metadata: Metadata = {
  title: "Keyframes Lab 4 - Sliding Text",
  description: "Create a text components that slides in from the left using keyframes.",
};

export default function KeyframesLab4() {
  return <Lab4 />;
}