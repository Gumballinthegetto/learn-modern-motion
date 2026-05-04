import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Lab 1 - Draggable Box",
  description:
    "Learn to use useMotionValue to track and display the real-time position of draggable elements.",
};

export default function MotionValueLab1Page() {
  return <Lab1 />;
}
