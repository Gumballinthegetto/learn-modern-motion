import type { Metadata } from "next";
import Lab3 from "./Lab3";

export const metadata: Metadata = {
  title: "Transformations Lab 3 - Rotation Animation",
  description: "Spin an icon continuously.",
};

export default function TransformationsLab3Page() {
  return <Lab3 />;
}