import Practice1 from "@/app/ui/gestures/Practice1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swipeable Cards - Motion Practice",
  description:
    "Learn to build swipeable card interfaces with drag gestures, constraints, and smooth animations for next/previous navigation.",
};
export default function GesturesPractice1() {
  return <Practice1 />;
}