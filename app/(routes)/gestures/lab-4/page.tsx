import Lab4 from "./Lab4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 4 - Tap to Change Color",
  description: "Create a box that changes color when tapped.",
};

export default function GesturesLab4() {
  return <Lab4 />;
}