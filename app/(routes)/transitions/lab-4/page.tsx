import type { Metadata } from "next";
import Lab4 from "./Lab4";

export const metadata: Metadata = {
  title: "Transitions Lab 4 - Responsive Button Animations",
  description:
    "Create a responsive animated button using Motion transitions, hover/tap states, and dynamic background color changes.",
};


export default function TransitionsLab4() {
  return <Lab4 />;
}