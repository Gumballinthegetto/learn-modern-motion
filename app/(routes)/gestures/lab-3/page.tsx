import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 3 - Rotate on Drag",
  description: "Create a box that rotates when being dragged.",
};

export default function GesturesLab3() {
  return <Lab3 />;
}