import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 3 - Rotate on Drag",
  description:
    "Combine drag events with rotation calculations to create dynamic, interactive elements that respond to user movement.",
};

export default function GesturesLab3() {
  return <Lab3 />;
}