import type { Metadata } from "next";
import Practice4 from "@/app/ui/transitions/Practice4";

export const metadata: Metadata = {
  title: "Transitions Practice 4 - Responsive Button Animations",
  description:
    "Create a responsive animated button using Motion transitions, hover/tap states, and dynamic background color changes.",
};


export default function TransitionsPractice4() {
  return <Practice4 />;
}