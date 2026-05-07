import Lab2 from "./Lab2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 2 - Draggable Box",
  description: "Create a box that can be dragged around the screen.",
};
export default function GesturesLab2() {
  return <Lab2 />;
}