import type { Metadata } from "next";
import Practice3 from "@/app/ui/transformations/Practice3";

export const metadata: Metadata = {
  title: "Transformations Practice 3 - Motion Practice",
  description: "Intermediate transformation animations with Motion. Explore skew, perspective, and transform-origin properties.",
};

export default function TransformationsPractice3Page() {
  return <Practice3 />;
}