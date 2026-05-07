import type { Metadata } from "next";
import Lab5 from "./Lab5";

export const metadata: Metadata = {
  title: "Transformations Lab 5 - Combined Transformations",
  description: "Create a complex animation combining multiple transformations.",
};

export default function TransformationsLab5Page() {
  return <Lab5 />;
};