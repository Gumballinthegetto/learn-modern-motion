import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Lab 1 - Draggable Box",
  description: "Create a draggable box that updates its position using useMotionValue.",
};

export default function MotionValueLab1Page() {
  return <Lab1 />;
}
