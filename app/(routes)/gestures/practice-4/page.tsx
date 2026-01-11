import Practice4 from "@/app/ui/gestures/Practice4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tap to Change Color - Motion Practice",
  description:
    "Explore tap gestures and state-driven animations by building an interactive color-changing component.",
};

export default function GesturesPractice4() {
  return <Practice4 />;
}