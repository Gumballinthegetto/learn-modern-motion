import Practice5 from "./Practice5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Practice 1 - Swipeable Cards",
  description:
    "Learn to build swipeable card interfaces with drag gestures, constraints, and smooth animations for next/previous navigation.",
};
export default function StaggersPractice5() {
  return <Practice5 />;
}