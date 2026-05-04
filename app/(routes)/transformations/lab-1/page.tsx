import type { Metadata } from "next";
import Lab1 from "./Lab1";

export const metadata: Metadata = {
  title: "Transformations Lab 1 - Basic Translation",
  description: "Practice basic transformation animations with Motion. Learn scale, rotate, and translate properties.",
};

export default function TransformationsLab1Page() {
  return <Lab1 />;
};