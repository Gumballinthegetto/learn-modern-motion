import type { Metadata } from "next";
import Lab1 from "./Lab1";

export const metadata: Metadata = {
  title: "Transformations Lab 1 - Basic Translation",
  description: "Create a box that moves across the screen.",
};

export default function TransformationsLab1Page() {
  return <Lab1 />;
};