import type { Metadata } from "next";
import Practice2 from "@/app/ui/transformations/Practice2";

export const metadata: Metadata = {
  title: "Transformations Practice 2 - Vertical Movement",
  description: "Advanced transformation practice with Motion. Master complex transform combinations and 3D transforms.",
};

export default function TransformationsPractice2Page() {
  return <Practice2 />
};