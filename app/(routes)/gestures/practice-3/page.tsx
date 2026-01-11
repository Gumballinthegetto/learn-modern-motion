import Practice3 from "@/app/ui/gestures/Practice3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rotate on Drag - Motion Practice",
  description:
    "Combine drag events with rotation calculations to create dynamic, interactive elements that respond to user movement.",
};

export default function GesturesPractice3() {
  return <Practice3 />;
}