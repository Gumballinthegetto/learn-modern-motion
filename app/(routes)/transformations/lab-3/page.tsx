import type { Metadata } from "next";
import Lab3 from "./Lab3";

export const metadata: Metadata = {
  title: "Transformations Lab 3 - Rotation Animation",
  description: "Intermediate transformation animations with Motion. Explore skew, perspective, and transform-origin properties.",
};

export default function TransformationsLab3Page() {
  return <Lab3 />;
}