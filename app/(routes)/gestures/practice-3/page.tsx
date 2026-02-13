import Practice3 from "./Practice3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Practice 3 - Rotate on Drag",
  description:
    "Combine drag events with rotation calculations to create dynamic, interactive elements that respond to user movement.",
};

export default function GesturesPractice3() {
  return <Practice3 />;
}