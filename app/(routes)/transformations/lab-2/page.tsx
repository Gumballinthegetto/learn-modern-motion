import type { Metadata } from "next";
import Lab2 from "./Lab2";

export const metadata: Metadata = {
  title: "Transformations Lab 2 - Vertical Movement",
  description: "Make a circle bounce up and down.",
};

export default function TransformationsLab2Page() {
  return <Lab2 />
};