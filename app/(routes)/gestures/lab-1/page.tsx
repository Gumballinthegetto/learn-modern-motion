import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 1 - Swipeable Cards",
  description:
    "Learn to build swipeable card interfaces with drag gestures, constraints, and smooth animations for next/previous navigation.",
};
export default function GesturesLab1() {
  return <Lab1 />;
}