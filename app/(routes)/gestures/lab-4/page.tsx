import Lab4 from "./Lab4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 4 - Tap to Change Color",
  description:
    "Explore tap gestures and state-driven animations by building an interactive color-changing component.",
};

export default function GesturesLab4() {
  return <Lab4 />;
}