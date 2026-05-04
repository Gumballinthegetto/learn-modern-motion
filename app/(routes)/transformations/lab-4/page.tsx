import type { Metadata } from "next";
import Lab4 from "./Lab4";

export const metadata: Metadata = {
  title: "Transformations Lab 4 - Skewed Translation",
  description: "Advanced transformation techniques with Motion. Learn matrix transforms and custom transform functions.",
};

export default function TransformationsLab4Page() {
  return <Lab4 />;
};