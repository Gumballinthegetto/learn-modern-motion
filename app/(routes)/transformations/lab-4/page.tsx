import type { Metadata } from "next";
import Lab4 from "./Lab4";

export const metadata: Metadata = {
  title: "Transformations Lab 4 - Skewed Transition",
  description: "Animate a rectangle and return to normal when clicked again.",
};

export default function TransformationsLab4Page() {
  return <Lab4 />;
};