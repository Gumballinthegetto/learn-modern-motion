import Lab2 from "./Lab2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Lab 2 - Hover-Linked Scale",
  description: "Create a button that scales up when hovered, using useMotionValue.",
};

export default function MotionValueLab2Page() {
  return <Lab2 />;
}
