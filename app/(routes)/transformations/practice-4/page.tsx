import type { Metadata } from "next";
import Practice4 from "@/app/ui/transformations/Practice4";

export const metadata: Metadata = {
  title: "Transformations Practice 4 - Skewed Translation",
  description: "Advanced transformation techniques with Motion. Learn matrix transforms and custom transform functions.",
};

export default function TransformationsPractice4Page() {
  return <Practice4 />;
};