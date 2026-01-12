import type { Metadata } from "next";
import Practice1 from "@/app/ui/transformations/Practice1";

export const metadata: Metadata = {
  title: "Transformations Practice 1 - Basic Translation",
  description: "Practice basic transformation animations with Motion. Learn scale, rotate, and translate properties.",
};

export default function TransformationsPractice1Page() {
  return <Practice1 />;
};